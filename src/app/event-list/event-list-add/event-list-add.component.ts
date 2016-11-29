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
    console.log("form.value=", this.form.value);
    //console.log(this.form); 

    let newEvent = new Event(this.form.value.title, this.type);
      

    if (! this.form.value.currentTime) {
      if (this.form.value.date == "") {
        alert("Please enter valid date");
        return;
      }
      newEvent.date = new Date(this.form.value.date);
    } else {
      newEvent.date = new Date();  
    }

    // main delta between the diary entri types...
    switch (this.type) {
      
      case "Home":

        newEvent.homeActivity =  this.qs.getKeyValue(this.form.value.homeActivity);
        break;

      case "School":

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
    
        break;

      case "Playground":
        
          newEvent.game = this.qs.getKeyValue(this.form.value.game);
          newEvent.hadFun = this.qs.getKeyValue(this.form.value.hadFun);

        break;
      
    }



        

    //console.log("Debug: event we are about to add:" + JSON.stringify(newEvent)); // debug

    this.els.addEvent(newEvent);


    // NEW METHOD


    // 
    let eventData = this.qs.getFormAnswers(this.type, this.form.value);

    console.log('eventData=', eventData);

    eventData['type'] = this.type;

    let date: Date;
    if (! this.form.value.currentTime) {
      date = new Date(this.form.value.date);
    } else {
      date = new Date();  
    }

    eventData['dateStr'] = date.toString();  // we override the Date type with string

    this.els.addEvent2(eventData);

/*
    // collect form data and fill info to be saved in DB

    // first keep all the form data as is...
    
    let eventData = this.form.value;
    
    eventData['type'] = this.type;

    // add special info (like format)



    // 
    this.qs.getFormAnswers(this.type, this.form.value);


    // handle date

    let date: Date;

    if (! this.form.value.currentTime) {
      if (this.form.value.date == "") {
        alert("Please enter valid date");
        return;
      }
      date = new Date(this.form.value.date);
    } else {
      date = new Date();  
    }

    eventData['date'] = date.toString();  // we override the Date type with string



    // add any type specific info (try to reduce to minimum) 






    //this.els.addEvent2(eventData);
*/


    // TODO: refresh the form (so use won't re-submit) 


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


  formReady() {
    // either user left currentTime checked or filled the date 
    return (
        this.form.controls['currentTime'].value || 
        (this.form.controls['date'].value != "")
        );

  }

  
}
