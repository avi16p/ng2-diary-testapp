import { Component}  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../../dynamic-form/question-base';
import { QuestionControlService }    from '../../dynamic-form/question-control.service';
import { QuestionService } from './question.service';


import { Event } from '../../shared';
import { EventListService } from "../event-list.service";


@Component({
  // moduleId: module.id,
  selector: 'dynamic-form-school',
  templateUrl: '../../dynamic-form/form.template.html',
})

export class DynamicFormSchoolComponent {
  questions: QuestionBase<any>[] = [];
  type: string = "School"
  form: FormGroup;

  
  constructor(private qs: QuestionService, private qcs: QuestionControlService, 
    private els: EventListService) { 

    this.questions = this.qs.getQuestions(this.type); 

    // MUST do at construction or you get a mess later on while filling the form
    this.form = this.qcs.toFormGroup(this.questions);

   }
  

  onSubmit() {

  	// debug...
    //console.log(this.form.value);
    console.log(this.form);

    let newEvent = new Event(this.form.value.title, this.type);
      
     newEvent.classes = {
       math: this.form.value.class__math,
       hebrew: this.form.value.class__hebrew,
       geography: this.form.value.class__geography,
       gym: this.form.value.class__gym,
       social: this.form.value.class__social,
       biology: this.form.value.class__biology,
       science: this.form.value.class__science,
       other: this.form.value.class__other,
     };

     // insert altInput as if it is yet another class option
     if (this.form.value.class__other__altInput != "") {
       newEvent.classes[this.form.value.class__other__altInput] = true;
     } 


    newEvent.gotHomework = this.form.value.gotHomework;
    
    newEvent.date = new Date();

    //console.log("try:" + JSON.stringify(newEvent)); // debug

    this.els.addEvent(newEvent);

  }


  
}
