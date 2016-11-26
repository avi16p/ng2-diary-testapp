import { Component, OnInit} from '@angular/core';
import { EventListService } from "./event-list.service";



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  


  type: string;


  constructor(private els: EventListService) { }


  ngOnInit() {
   
    this.type = this.els.getCurrentType();
   
  }


  onTypeSelected(type: string) {
    console.log("in onTypeSelected");
    this.type = type;
  }

  onCleared() {
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
