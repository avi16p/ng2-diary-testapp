import {Routes} from "@angular/router";
import { RouterModule} from '@angular/router';

import { AppComponent} from "./app.component";
import { EventListComponent} from './event-list/event-list.component';
import { EventListAddComponent} from './event-list/event-list-add/event-list-add.component';
//import { EventListAddFormComponent} from './event-list/event-list-add/event-list-add-form/event-list-add-form.component';


const APP_ROUTES: Routes  = [
		{path:'', component: EventListComponent},    
		{path:'show', component: EventListComponent},   
		{path:'add', component: EventListAddComponent},   
		//{path:'add/Home', component: EventListAddFormComponent},   
		//{path:'add/School', component: EventListAddFormComponent},   
		//{path:'add/Playground', component: EventListAddFormComponent},   
];

export const routing = RouterModule.forRoot(APP_ROUTES);
