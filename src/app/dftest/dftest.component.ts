import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dftest',
  templateUrl: './dftest.component.html',
  styleUrls: ['./dftest.component.css']
})
export class DftestComponent implements OnInit {


	myForm: FormGroup;

	constructor() {

		this.myForm = new FormGroup(

				{
					radio1: new FormControl('1'),
					checkbox1: new FormControl(true),
					title: new FormControl(),
					title2: new FormControl(),
					//username: new FormControl('Max', Validators.required), // def, validator
					//email: new FormControl(),
					//password: new FormControl(),
				}

			);



	}    

	onSubmit() {
		console.log(this.myForm);
		console.log(this.myForm.value);
		console.log("TITLE=", this.myForm.value.title);
		console.log("TITLE2=", this.myForm.value.title2);
	}


  ngOnInit() {
  }

}
