import { Injectable} from '@angular/core';
import { Event, IEvent } from "../shared";

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";


import { appDefaults } from "../config";

@Injectable() export class EventListService {


  private currentType: string;


  dbItems: FirebaseListObservable<IEvent[]>[] = [];
  dbItemsForDisplay: FirebaseListObservable<IEvent[]>[] = [];  // used for what we actually display



  constructor(private af: AngularFire) {
  
    this.getEventTypes().forEach(type => 
      { 

        this.dbItems[type] = this.af.database.list(this.getDbPath(type)); 

        this.dbItemsForDisplay[type] = this.af.database.list(this.getDbPath(type), {query: {
              orderByChild: 'title',
              limitToFirst: appDefaults['numEntriesToDisplay'],
          }} );

      }
      );

     this.currentType = appDefaults['startType'];


  }


  getEventTypes() {
    return ['Home', 'School', 'Playground'];
  }

  getDbPath(type: string) {

    let user = 'User1'  // TODO: use real usr d after adding auth
    return (user + '/Events/' + type);

  }


  addEvent(event: Event) {

    event.dateStr = event.date.toString();
    event.dateNum = event.date.getMilliseconds();

    this.dbItems[event.type].push(event);

  }


  setCurrentType(type) {
    this.currentType = type;
  }

  getCurrentType() {
    return this.currentType;
  }



}