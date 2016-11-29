import { Component, OnInit} from '@angular/core';
import { EventListService } from "./event-list.service";
import { QuestionService } from '../dynamic-form/question.service';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  eventTypes = []; 

  tabTypes = [];

  type: string;


  constructor(private qs: QuestionService, private els: EventListService) { }


  ngOnInit() {
   
    this.eventTypes = this.qs.getTypes();

    this.tabTypes = this.eventTypes.concat('All');

    this.type = this.els.getCurrentType();
   
  }


  onTypeSelected(type: string) {
    console.log("in onTypeSelected");
    this.type = type;
  }

  onCleared() {
  }


  tabChanged(x) {} // TODO




}
