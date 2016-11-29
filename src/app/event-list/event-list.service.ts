import { Injectable} from '@angular/core';
import { Event, IEvent } from "../shared";

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseAuthState} from "angularfire2";
import {AuthService} from "../auth/auth.service";

import { QuestionService } from '../dynamic-form/question.service';

import { appDefaults } from "../config";


@Injectable() export class EventListService {


  private currentType: string;

  userName: string = "UNKNOWN";

  dbItems: FirebaseListObservable<IEvent[]>[] = [];
  dbItemsForDisplay: FirebaseListObservable<IEvent[]>[] = [];  // used for what we actually display


  dbItems2: FirebaseListObservable<any[]>;
  dbItemsForDisplay2: FirebaseListObservable<any[]>[] = [];  // used for what we actually display



  constructor(private qs: QuestionService, private af: AngularFire, private authService: AuthService) {
  

     this.currentType = appDefaults['startType'];



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

    this.qs.getTypes().forEach(type => 
      { 
        this.dbItems[type] = this.af.database.list(this.getDbPath(type)); 
        this.dbItems2 = this.af.database.list(this.getDbPath2(type)); 

        this.dbItemsForDisplay[type] = this.af.database.list(this.getDbPath(type), {query: {
              orderByChild: 'key',
              limitToLast: appDefaults['numEntriesToDisplay'],
          }} );


        this.dbItemsForDisplay2[type] = this.af.database.list(this.getDbPath2(type), {query: {
              orderByChild: 'type',
              equalTo: type,
              limitToLast: appDefaults['numEntriesToDisplay'],
          }} );

        this.dbItemsForDisplay2['All'] = this.af.database.list(this.getDbPath2(type), {query: {
              limitToLast: appDefaults['numEntriesToDisplay'],
          }} );

      }
      );
  }


  getDbPath(type: string) {

    return (this.userName + '/Events/' + type);

  }

  getDbPath2(type: string) {

    return (this.userName + '/DiaryEvents');

  }



  addEvent(event: Event) {

    event.dateStr = event.date.toString();

    this.dbItems[event.type].push(event);

  }


  addEvent2(event: {}) {

    this.dbItems2.push(event);


  }


  setCurrentType(type) {
    this.currentType = type;
  }

  getCurrentType() {
    return this.currentType;
  }



}