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
    //console.log(this.form);

    let newEvent = new Event(this.form.value.title, this.type);
      
     let classes = {
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
       classes[this.form.value.class__other__altInput] = true;
     } 

    newEvent.classesStr = this.printClasses(classes);

    newEvent.gotHomework = this.qs.getKeyValue(this.form.value.gotHomework);
    


    if (! this.form.value.currentTime) {
      newEvent.date = new Date(this.form.value.date);
    } else {
      newEvent.date = new Date();  
    }
        
    //console.log("try:" + JSON.stringify(newEvent)); // debug

    this.els.addEvent(newEvent);

  }




  printClasses(classes: {}) {

     let str: string = "";
     let first: boolean = true;

     for (var key in classes){
        var attrName = key;
        var attrValue = classes[key];
        if (attrValue && (key != 'other')) {

          if  (first) {
            first = false;
            str = this.qs.getKeyValue(key);
          } else {
            str = str + ", " + this.qs.getKeyValue(key);
          }

        }
     }

      return str;
    }




  
}
