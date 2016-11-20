import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import { EventListComponent } from './event-list/event-list.component';
import { EventListService } from "./event-list/event-list.service";
import { EventListAddComponent } from './event-list/event-list-add/event-list-add.component';
import { routing } from './app.routing';
import { EventListAddQuestionComponent } from './event-list/event-list-add/event-list-add-question/event-list-add-question.component';
import { QuestionControlService } from "./event-list/event-list-add/event-list-add-question/question-control.service";
import { QuestionService } from "./event-list/event-list-add/event-list-add-question/question.service";
import { DynamicFormComponent } from './event-list/event-list-add/event-list-add-question/dynamic-form.component';
import { DynamicFormQuestionComponent } from './event-list/event-list-add/event-list-add-question/dynamic-form-question.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventListAddComponent,
    EventListAddQuestionComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [EventListService, QuestionControlService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
