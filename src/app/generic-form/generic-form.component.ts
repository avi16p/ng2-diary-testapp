import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  public disableForm = false;
  public form: FormGroup;
  public firstName = new FormControl('');
  public lastName = new FormControl('', Validators.required);
  public email = new FormControl('');
  public email2 = new FormControl('');
  public breakfast = new FormControl('Continental');
  public personId = new FormControl('');
 
  people = [{
    id: '1',
    name: 'idan'
  },
    {
      id: '2',
      name: 'idan2'
    }];
  
  constructor(private fb:FormBuilder) {
    this.form = fb.group({
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'email2': this.email2,
      'breakfast': this.breakfast,
      'personId': this.personId
    });
  }

  ngOnInit() {
  }
  public onSubmit() {
    console.log(this.form);
  }

  public onDisableForm(formDisabled: boolean) {
    if ( formDisabled ) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
