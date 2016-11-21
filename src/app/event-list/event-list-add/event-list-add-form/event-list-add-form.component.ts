import { Component, OnInit, Input } from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng2-formly';

@Component({
  selector: 'app-event-list-add-form',
  templateUrl: './event-list-add-form.component.html',
  styleUrls: ['./event-list-add-form.component.css']
})
export class EventListAddFormComponent implements OnInit {


  @Input() type: string;


  constructor() { }

  ngOnInit() {
  	console.log('event-list-add-form: type=' + this.type);
  }


  formData = {};
  form: FormGroup = new FormGroup({});


  submit(formData) {
    console.log(formData);
  }






	 titleQ = {
	    key: 'title',
	    type: 'input',
	    templateOptions: {
	      required: true,
	      type: 'text',
	      label: 'Event Title'
	    }
	  };


	  userFields: FormlyFieldConfig = [{
	    className: 'row',
	    
	    fieldGroup: [
	    	this.titleQ,	      
	    ]


	  }]; // userFields



/*
  getUserFields() {

	 let titleQ = {
	    key: 'title',
	    type: 'input',
	    templateOptions: {
	      required: true,
	      type: 'text',
	      label: 'Event ' + this.type + ' Title'
	    }
	  };


	  let userFields: FormlyFieldConfig = [{
	    className: 'row',
	    
	    fieldGroup: [
	    	titleQ,	      
	    ]


	  }]; // userFields

	  return userFields;

  }
*/


}
