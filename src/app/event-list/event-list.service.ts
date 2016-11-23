import { Event } from "../shared";

export class EventListService {
  private events: Event[] = [];

  private time: number;

  private firstTime: boolean = true; 

  private currentType: string = 'Home';  // TODO: move this to global configuration

  constructor() {

  	this.events = [
  		new Event("watch tv", "Home"),
      new Event("hide & seek", "Playground"),      
      new Event("aa", "Home"),
      new Event("bb", "Home"),
      new Event("cc", "Home"),
      new Event("play1", "Playground"),
      new Event("play2", "Playground"),
      new Event("play3", "Playground"),
      new Event("sc1", "School"),
      new Event("dd", "Home"),
      new Event("ee", "Home"),

  	];
  
    this.time = 1000000000000;
    this.events.forEach(event => {event.date = new Date(this.time); this.time += 20000000000});


  }

  getEvents() {
    return this.events;
  }

  addEvents(events: Event[]) {
    Array.prototype.push.apply(this.events, events);
  }
  
  addEvent(event: Event) {
    this.events.push(event);
  }
  
  editEvent(oldEvent: Event, newEvent: Event) {
    this.events[this.events.indexOf(oldEvent)] = newEvent;
  }
  
  deleteEvent(event: Event) {
    this.events.splice(this.events.indexOf(event), 1);
  }


  setCurrentType(type) {
    this.currentType = type;
  }

  getCurrentType() {
    return this.currentType;
  }



}