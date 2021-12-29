import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.scss']
})
export class FormValidateComponent implements OnInit {

  signUp: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUp = this.fb.group({
      Fullname: ['', [Validators.required]],
      Email: ['', [Validators.email, Validators.pattern('.*com$')]],
      Pass: ['', [Validators.required, Validators.minLength(5)]]
    })
   }

  ngOnInit(): void {}

  get Fullname() {
    return this.signUp.get('Fullname');
  }

  get Email() {
    return this.signUp.get('Email');
  }

  get Pass() {
    return this.signUp.get('Pass');
  }

  onSubmit() {
    console.log(this.signUp.get('Email'));
  }

}
