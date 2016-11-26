import { Component, OnInit} from '@angular/core';
import { Event, IEvent } from '../shared';
import { EventListService } from "./event-list.service";

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";


import { appDefaults } from "../config";

import { ReversePipe } from '../shared/reverse.pipe';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  

  dbItems: FirebaseListObservable<IEvent[]>[] = [];


  selectedEvent: Event; // For future feature of user selects an event


  eventTypes: string [];
  type: string;





  constructor(private els: EventListService, private af: AngularFire) {

    this.eventTypes = this.els.getEventTypes();


    this.eventTypes.forEach(type => 
      
      { this.dbItems[type] = this.af.database.list(this.els.getDbPath(type), {query: {
              orderByChild: 'title',
              limitToFirst: appDefaults['numEntriesToDisplay'],
          }} ); }

      );

  }





  ngOnInit() {
   
    this.type = this.els.getCurrentType();
   
  }

  onSelectEvent(event: Event) {
     this.selectedEvent = event;
  }

  onTypeSelected(type: string) {
    console.log("in onTypeSelected");
    this.type = type;
  }

  onCleared() {
    this.selectedEvent = null;
  }




  printClasses(classes: {}) {

     let str: string = "";
     let first: boolean = true;

     for (var key in classes){
        var attrName = key;
        var attrValue = classes[key];
        if (attrValue) {

          if  (first) {
            first = false;
            str = key;
          } else {
            str = str + ", " + key;
          }

        }
     }



     return str;

  }





}
