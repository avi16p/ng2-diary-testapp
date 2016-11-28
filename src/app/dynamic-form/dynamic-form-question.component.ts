import { Component, Input } from '@angular/core';
import { FormGroup, Validators }        from '@angular/forms';
import { QuestionBase }     from './question-base';
@Component({
  //Avi//moduleId: module.id,
  selector: 'df-question',
  templateUrl: 'dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }


  // make date required once it's visible - TODO: this is demo of the idea (not automated yet)
  checkBoxClicked(elementId) {
  		//console.log('checkBoxClicked called', elementId, this.form.controls[this.question.key]);

  		if (this.question.key=="currentTime") {

  			

  			// console.log("valid=", Validators.required);
  			// console.log("at1", this.form.controls['date']);
  			// console.log('at2', this.form.controls['title'])
  			// this.form.controls['title'].validator = null;
  			// //this.form.controls['date'].validator = Validators.required;

  		 }

	}

}
