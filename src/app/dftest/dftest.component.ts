

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dftest',
  templateUrl: './dftest.component.html',
  styleUrls: ['./dftest.component.css']
})
export class DftestComponent implements OnInit {

	people = ['p1', 'p2', 'p3'];

	form: FormGroup;

	constructor() {

		this.form = new FormGroup(

				{
					firstName: new FormControl(),
					lastName: new FormControl(),
					breakfast: new FormControl(),
					personId: new FormControl(),
					//title2: new FormControl(),
					//username: new FormControl('Max', Validators.required), // def, validator
					//email: new FormControl(),
					//password: new FormControl(),
				}

			);



	}    

	onSubmit() {
		console.log(this.form);
		console.log(this.form.value);
		//console.log("TITLE=", this.form.value.title);
		//console.log("TITLE2=", this.form.value.title2);
	}


  ngOnInit() {
  }

tabChanged(x) {}

}





