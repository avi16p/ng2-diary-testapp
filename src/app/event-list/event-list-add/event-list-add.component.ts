import { Component, OnInit} from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../../dynamic-form/question-base';
import { QuestionControlService }    from '../../dynamic-form/question-control.service';
import { QuestionService } from '../../dynamic-form/question.service';


import { Event } from '../../shared';
import { EventListService } from "../event-list.service";


@Component({
  selector: 'app-event-list-add',
  templateUrl: './event-list-add.component.html',
  styleUrls: ['./event-list-add.component.css']
})
export class EventListAddComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  form: FormGroup;

  type: string = ''; 
 
  eventTypes = []; 


		
  constructor(private qs: QuestionService, private qcs: QuestionControlService, 
    private els: EventListService) { 

   }
  
  ngOnInit() {


    this.eventTypes = this.qs.getTypes();

    this.type = this.els.getCurrentType();


    //console.log('at EventListAddFormComponent: ngInit; type=', this.type);
    this.questions = this.qs.getQuestions(this.type); 

    this.form = this.qcs.toFormGroup(this.questions);    
  }




  typeChanged() {
    //console.log('typeChanged to ' + this.type);
    this.els.setCurrentType(this.type); // remember for next time

    this.questions = this.qs.getQuestions(this.type); 

    this.form = this.qcs.toFormGroup(this.questions);    

  }


  onSubmit() {

    //console.log('at EventListAddFormComponent: onSubmit; type=', this.type);

    // debug...
    //console.log("form.value=", this.form.value);
    //console.log(this.form); 


        
    let eventData = this.qs.getFormAnswers(this.type, this.form.value);

    //console.log('eventData=', eventData);

    eventData['type'] = this.type;

    let date: Date;
    if (! this.form.value.currentTime) {
      date = new Date(this.form.value.date);
    } else {
      date = new Date();  
    }

    eventData['dateStr'] = date.toString();  // we override the Date type with string

    this.els.addEvent(eventData);


    // TODO: refresh the form (so use won't re-submit) 
     

  }




  formReady() {
    // either user left currentTime checked or filled the date 
    return (
        this.form.controls['currentTime'].value || 
        (this.form.controls['date'].value != "")
        );

  }

  
}
