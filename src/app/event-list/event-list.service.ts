import { Injectable} from '@angular/core';
import { Event, IEvent } from "../shared";

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseAuthState} from "angularfire2";
import {AuthService} from "../auth/auth.service";

import { QuestionService } from '../dynamic-form/question.service';

import { appDefaults } from "../config";


@Injectable() export class EventListService {


  private currentType: string;

  userName: string = "UNKNOWN";



  dbItems: FirebaseListObservable<any[]>;
  dbItemsForDisplay: FirebaseListObservable<any[]>[] = [];  // used for what we actually display



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
        this.dbItems = this.af.database.list(this.getDbPath(type)); 


        this.dbItemsForDisplay[type] = this.af.database.list(this.getDbPath(type), {query: {
              orderByChild: 'type',
              equalTo: type,
              limitToLast: appDefaults['numEntriesToDisplay'],
          }} );

        this.dbItemsForDisplay['All'] = this.af.database.list(this.getDbPath(type), {query: {
              limitToLast: appDefaults['numEntriesToDisplay'],
          }} );

      }
      );
  }



  getDbPath(type: string) {

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



}