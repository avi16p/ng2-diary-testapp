import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-event-list-add',
  templateUrl: './event-list-add.component.html',
  styleUrls: ['./event-list-add.component.css']
})
export class EventListAddComponent implements OnInit {

  type: string = ''; // no default; user should select first
 
  eventTypes = ['Home', 'School', 'Playground'];


		
  constructor() {}


  ngOnInit() {

  }

  typeChanged(type: string) {
  	console.log('typeChanged to ' + type);
  }


 
}
