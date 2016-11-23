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
  
    let e: Event;

    e = new Event("watch tv", "Home");
    e.homeActivity = "TV";
    this.events.push(e);  


    e = new Event("play for hours", "Home");
    e.homeActivity = "Smartphone";
    this.events.push(e);  


    e = new Event("reading new book", "Home");
    e.homeActivity = "Book reading";
    this.events.push(e);  


    e = new Event("just a school day", "School");
    e.classes = {
      math: true,
      gym: true,
    };
    e.gotHomework = "Yes";
    this.events.push(e);  



    e = new Event("Sport day at school", "School");
    e.classes = {
      math: false,
      gym: true,
    };
    e.gotHomework = "Yes but won't do";
    this.events.push(e);  



    e = new Event("Teacher was sick!", "School");
    e.classes = {
      math: false,
      gym: false,
    };
    e.gotHomework = "No";
    this.events.push(e);  



    e = new Event("afternoon with Dana", "Playground");
    e.game = "Swings";
    e.hadFun = "Kind of";
    this.events.push(e);  


    e = new Event("This was real fun", "Playground");
    e.game = "Catches";
    e.hadFun = "Yes";
    this.events.push(e);  



    e = new Event("afternoon with Dana", "Playground");
    e.game = "Swings";
    e.hadFun = "Kind of";
    this.events.push(e);  


    e = new Event("many friends came today", "Playground");
    e.game = "Hide & Seek";
    e.hadFun = "Yes";
    this.events.push(e);  


    e = new Event("Was alone", "Playground");
    e.game = "Other";
    e.hadFun = "No";
    this.events.push(e);  






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