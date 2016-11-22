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

  template: `
		<div>
		  <form (ngSubmit)="onSubmit()" [formGroup]="form">
		    <div *ngFor="let question of questions" class="form-row">
		      <df-question [question]="question" [form]="form"></df-question>
		    </div>
		    <div class="form-row" style="margin-top:10px" >
		      <button type="submit" [disabled]="!form.valid">Save</button>
		    </div>
		  </form>
		</div>
  `,
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
    //console.log(this.form);

    let newEvent = new Event(this.form.value.title, this.type);
      
    newEvent.class = this.form.value.class;
    newEvent.gotHomework = this.form.value.gotHomework;
    
    newEvent.date = new Date();

    console.log("try:" + JSON.stringify(newEvent)); // debug

    this.els.addEvent(newEvent);

  }


  
}
