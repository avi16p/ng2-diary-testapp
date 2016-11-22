import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";


// Global components:
import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';

// Auth
import {AUTH_PROVIDERS} from 'angular2-jwt';

// Firebase
import { AngularFireModule } from 'angularfire2';

// Material design components
import {MdlModule} from 'angular2-mdl';
import {MdlSelectModule} from "@angular2-mdl-ext/select";
import {MdlPopoverModule} from "@angular2-mdl-ext/popover";

// user components
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {GenericFormComponent} from './generic-form/generic-form.component';
import {GenericLinkComponent} from './generic-link/generic-link.component';
import {GenericCardComponent} from './generic-card/generic-card.component';
import {GenericDialogComponent} from './generic-dialog/generic-dialog.component';

// services
import {AuthService} from "./auth/auth.service";
import {firebaseConfig} from "./config";


// TODO: cleanup to category

import { EventListComponent } from './event-list/event-list.component';
import { EventListService } from "./event-list/event-list.service";
import { EventListAddComponent } from './event-list/event-list-add/event-list-add.component';
import { routing } from './app.routing';
import { QuestionControlService } from "./dynamic-form/question-control.service";
import { QuestionService } from "./event-list/event-list-add/question.service";
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';
import { DftestComponent } from './dftest/dftest.component';
import { DynamicFormHomeComponent } from './event-list/event-list-add/dynamic-form-home.component';
import { DynamicFormSchoolComponent } from './event-list/event-list-add/dynamic-form-school.component';
import { DynamicFormPlaygroundComponent } from './event-list/event-list-add/dynamic-form-playground.component';

//import {DatePickerModule} from 'ng2-datepicker';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GenericLinkComponent,
    GenericCardComponent,
    GenericDialogComponent,
    GenericFormComponent,
    AuthComponent,

    EventListComponent,
    EventListAddComponent,
    DynamicFormQuestionComponent,
    DftestComponent,
    DynamicFormHomeComponent,
    DynamicFormSchoolComponent,
    DynamicFormPlaygroundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule,
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'generic-link', component: GenericLinkComponent}
    //]),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,

    routing,
    //DatePickerModule, 
   


  ],
  providers: [
    AUTH_PROVIDERS,
    AuthService,
    EventListService, QuestionControlService, QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
