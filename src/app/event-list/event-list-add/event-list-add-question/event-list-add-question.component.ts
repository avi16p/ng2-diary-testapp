import { Component, OnInit, Input } from '@angular/core';

import { QuestionService } from './question.service';
import { EventListService } from "../../event-list.service";


@Component({
  selector: 'app-event-list-add-question',
  templateUrl: './event-list-add-question.component.html',
  styleUrls: ['./event-list-add-question.component.css']
})
export class EventListAddQuestionComponent implements OnInit {

  service: QuestionService;


  @Input() type: string;



  constructor(service: QuestionService, private els: EventListService) {
    this.service = service;
  }

  ngOnInit() {
  }

  getActiveQuestions(type: string) {
    return this.service.getQuestions(type);  
  }

  // TODO:
  // temporal trick: on init we create all questions and hide them. otherwise crache as we attempt to access 
  // questions that were not set on init 
  getVisibilityWhenActive() {

    if (this.type != '') this.els.setCurrentType(this.type);

    return (this.type=='' ? 'hidden' : 'visible');
  }

}
