import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

	@Input() data: {};

	eventInfo: string = "";
	type: string = "";
	title: string = "";
	date: string = "";

  	fieldsDataList = [];

  constructor() { }

  ngOnInit() {

	this.fieldsDataList = []; 

  	this.type = this.data['type'];
  	this.date = this.data['dateStr'];
  	this.title = this.data['title']['value'];
  	this.eventInfo = JSON.stringify(this.data);

  	// traverse the data and fill info based on types
  	for (var q in this.data) {
  		let info = this.data[q];
  		//console.log('q=', info);
  		switch (info['qType']) {
  			case "Textbox":
  			case "Radio":
  			case "Dropdown":
  			case "MultiCheckbox":

  				if (info['label'] == 'Title') continue;
  				if (info['label'] == 'Date') continue;
  				
  				this.fieldsDataList.push([info['label'], info['value']]);
  				break;
  			case "Checkbox":
  				if (info['label'] == 'Time') continue;
  				if (info['value']) {
	  				this.fieldsDataList.push([info['label'], info['text']]);
	  			}
  				break;
  			default:
  				// code...
  				break;
  		}
  	}



  }

}
