import { Component, OnInit } from '@angular/core';
import { Event } from '../shared';
import { EventListService } from "./event-list.service";


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  events: Event[] = [];
  selectedEvent: Event;
  numEventsToDisplay: number = 3;


  eventTypes = ['Home', 'School', 'Playground'];
  type: string;

  workingList: Event[];

  constructor(private els: EventListService) {}

  ngOnInit() {
    this.type = this.els.getCurrentType();
    this.events = this.els.getEvents();
    console.log("event0-list-comp: onInit type=" + this.type);
  }

  onSelectEvent(event: Event) {
     this.selectedEvent = event;
  }

  onTypeSelected() {
    console.log("in onTypeSelected");
  }

  onCleared() {
    this.selectedEvent = null;
  }


  getActiveEvents() {

    this.els.setCurrentType(this.type); // remember for next time

    this.events = this.els.getEvents(); // might have been updated by 'add' 

    // return latest 3 events of specific type
    this.workingList = this.events.filter(event => {return event.type == this.type});
    this.workingList.sort(function(a, b){ return  ((a.date > b.date) ? -1 : 1)});

    return this.workingList.slice(0, this.numEventsToDisplay);
  }



  printEvent(event: Event) {
    return JSON.stringify(event);
  }





}
