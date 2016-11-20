import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';


import { Event } from '../../../shared';
import { EventListService } from "../../event-list.service";


@Component({
  //Avi// moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() type: string;
  form: FormGroup;
  payLoad = '';


  
  constructor(private qcs: QuestionControlService, private els: EventListService) {  }
  
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {

    //console.log(this.form.value);
    console.log(this.form);

    this.payLoad = JSON.stringify(this.form.value);

    let newEvent = new Event(this.form.value.title, this.type);
      
    newEvent.homeActivity = this.form.value.homeActivity;
    newEvent.class = this.form.value.class;
    newEvent.gotHomework = this.form.value.gotHomework;
    newEvent.game = this.form.value.game;
    newEvent.hadFun = this.form.value.hadFun;
    

    newEvent.date = new Date();
    this.els.addEvent(newEvent);

    console.log("try:" + JSON.stringify(newEvent));

  }


  
}
