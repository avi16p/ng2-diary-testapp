import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { MultiCheckboxQuestion} from './question-multiCheckbox';


@Injectable()
export class QuestionControlService {
  constructor() { }

  group: any = {};

  toFormGroup(questions: QuestionBase<any>[] ) {
    //let group: any = {};

    questions.forEach(question => {

		    this.setupFormControl(question);

		    // group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
		    //                                           : new FormControl(question.value || '');
    });

    return new FormGroup(this.group);
  }



  setupFormControl(question: QuestionBase<any>) {

  	
    if (question.controlType == 'multiCheckbox') {
    	// MultiCheckBox is a special case since there is no native support to put them 
    	// under one FormControl as with select. 

    	let q: any = question;
    	 q.options.forEach(opt => {
 		 	  	 		this.group[q.key + '__' + opt.key] = new FormControl(opt.value || false);
    	 			}
    	 		);

    } else {
    	this.group[question.key] = 
    		question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    }

  }



}
