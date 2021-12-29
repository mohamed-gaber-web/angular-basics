import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchingPassword } from '../custome-validator/new.validator';

@Component({
  selector: 'app-custome-validate',
  templateUrl: './custome-validate.component.html',
  styleUrls: ['./custome-validate.component.scss']
})
export class CustomeValidateComponent implements OnInit {
  
  signUp: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUp = this.fb.group({
      Password: [''],
      ConfirmPassword: [''],
    }, { validator: matchingPassword })
   }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signUp.value);
  }

}
