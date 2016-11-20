import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-event-list-add',
  templateUrl: './event-list-add.component.html',
  styleUrls: ['./event-list-add.component.css']
})
export class EventListAddComponent implements OnInit {

  type: string = '';
 
  eventTypes = ['Home', 'School', 'Playground'];


  constructor() {}


  ngOnInit() {
  }

 
}
