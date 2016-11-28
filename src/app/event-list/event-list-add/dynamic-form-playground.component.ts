import { Component}  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../../dynamic-form/question-base';
import { QuestionControlService }    from '../../dynamic-form/question-control.service';
import { QuestionService } from './question.service';


import { Event } from '../../shared';
import { EventListService } from "../event-list.service";


@Component({
  // moduleId: module.id,
  selector: 'dynamic-form-playground',
  templateUrl: '../../dynamic-form/form.template.html',
})

export class DynamicFormPlaygroundComponent {
  questions: QuestionBase<any>[] = [];
  type: string = "Playground"
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
      
    
    newEvent.game = this.qs.getKeyValue(this.form.value.game);
    newEvent.hadFun = this.qs.getKeyValue(this.form.value.hadFun);
    


    if (! this.form.value.currentTime) {
      if (this.form.value.date == "") {
        alert("Please enter valid date");
        return;
      }
      newEvent.date = new Date(this.form.value.date);
    } else {
      newEvent.date = new Date();  
    }
        

    //console.log("try:" + JSON.stringify(newEvent)); // debug

    this.els.addEvent(newEvent);


    // refresh
    this.form = this.qcs.toFormGroup(this.questions);



  }


  formReady() {
    // either user left currentTime checked or filled the date 
    return (
        this.form.controls['currentTime'].value || 
        (this.form.controls['date'].value != "")
        );

  }

  
}
