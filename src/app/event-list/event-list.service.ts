import { Injectable} from '@angular/core';
import { Event, IEvent } from "../shared";

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseAuthState} from "angularfire2";
import {AuthService} from "../auth/auth.service";

import { QuestionService } from '../dynamic-form/question.service';

import { appDefaults } from "../config";


@Injectable() export class EventListService {


  private currentType: string;

  userName: string = "UNKNOWN";

  private demoMode: boolean = false;

  private numEntriesToDisplay: number;
  private numDelta = 5;

  dbItems: FirebaseListObservable<any[]>;
  dbItemsForDisplay: FirebaseListObservable<any[]>[] = [];  // used for what we actually display



  constructor(private qs: QuestionService, private af: AngularFire, private authService: AuthService) {
  

     this.currentType = appDefaults['startType'];

     this.numEntriesToDisplay = appDefaults['numEntriesToDisplay'];


     this.af.auth.subscribe((user: FirebaseAuthState) => {
      if (user) {
        //console.log("user=", user);

         console.log("displayname2=", user.auth.displayName);
         this.userName = user.auth.displayName;
         this.initDbItems();

      } else {
        console.log("event-list-service: not login in...");
      }
    });

  }



  initDbItems() {

    if (appDefaults['demoMode']) {
      this.setDemoMode();
    }

    this.qs.getTypes().forEach(type => 
      { 
        this.dbItems = this.af.database.list(this.getDbPath()); 


        this.dbItemsForDisplay[type] = this.af.database.list(this.getDbPath(), {query: {
              orderByChild: 'type',
              equalTo: type,
              limitToLast: this.numEntriesToDisplay,
          }} );

        this.dbItemsForDisplay['All'] = this.af.database.list(this.getDbPath(), {query: {
              limitToLast: this.numEntriesToDisplay,
          }} );

      }
      );
  }



  getDbPath() {

    if (this.demoMode) return "DEMO_USER" + '/DiaryEvents';

    return (this.userName + '/DiaryEvents');

  }



  addEvent(event: {}) {

    this.dbItems.push(event);


  }


  setCurrentType(type) {
    this.currentType = type;
  }

  getCurrentType() {
    return this.currentType;
  }


  setDemoMode() {
    this.demoMode = true;
  }


  clearDemoMode() {
    this.demoMode = false;
  }

  isDemoMode() {
    return this.demoMode;
  }



  showMoreEvents() {

    //console.log('at showMoreEvents');
    this.numEntriesToDisplay += this.numDelta;
    this.initDbItems();

  }

  showLessEvents() {

    //console.log('at showMoreEvents');
    this.numEntriesToDisplay -= this.numDelta;
    if (this.numEntriesToDisplay < 1) {
      this.numEntriesToDisplay = appDefaults['numEntriesToDisplay'];
    }
    this.initDbItems();

  }

  getNumLimit() {
    return this.numEntriesToDisplay;
  }

}