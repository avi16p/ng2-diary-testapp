import { Component, OnInit} from '@angular/core';
import { EventListService } from "../event-list.service";


@Component({
  selector: 'app-event-list-add',
  templateUrl: './event-list-add.component.html',
  styleUrls: ['./event-list-add.component.css']
})
export class EventListAddComponent implements OnInit {

  type: string = ''; // no default; user should select first
 
  eventTypes = ['Home', 'School', 'Playground'];


		
  constructor(private els: EventListService) {}


  ngOnInit() {
    this.type = this.els.getCurrentType();
  }

  typeChanged() {
  	console.log('typeChanged to ' + this.type);
    this.els.setCurrentType(this.type); // remember for next time

  }


 
}
