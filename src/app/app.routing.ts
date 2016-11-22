import {Routes} from "@angular/router";
import { RouterModule} from '@angular/router';

import { AppComponent} from "./app.component";
import { EventListComponent} from './event-list/event-list.component';
import { EventListAddComponent} from './event-list/event-list-add/event-list-add.component';

import { DftestComponent} from "./dftest/dftest.component";


const APP_ROUTES: Routes  = [
		{path:'dftest', component: DftestComponent},    // TODO: delete
		{path:'', component: EventListComponent},    
		{path:'show', component: EventListComponent},   
		{path:'add', component: EventListAddComponent},   
	
];

export const routing = RouterModule.forRoot(APP_ROUTES);
