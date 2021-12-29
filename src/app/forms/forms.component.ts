import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  // userName = new FormControl(); // single input
  // userNameDriven = ""

  // userProfile = new FormGroup({ // group inputs
  //   Firstname: new FormControl(),
  //   Lastname: new FormControl()
  // });

  userProfile: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.userProfile = this.fb.group({
      Firstname: ['', [Validators.required, Validators.minLength(4)]],
      Lastname: '',
      address: this.fb.group({
        City: '',
        Street: ''
      })
    })
   }

  ngOnInit(): void {
    // this.userName.valueChanges
    // .subscribe(data => {
    //   console.log(data); 
    // })
    // this.userName.setValue("hay!!"); // updated input value html
    // this.userNameDriven = "Hay Template Driven Form!!"; // updated input value html
  }

  get firstName() {
    return this.userProfile.get("Firstname") // get control input
  }

  onSubmit() {
    const profileValue = this.userProfile.value;
    console.log(profileValue);
  }

}

/**
 * ! Reactive Form
 * in module import  [ ReactiveFormsModule ] => @angular/forms reactive form
 * userName = new FormControl(); in class
 * [formControl] = "userName" in html single input
 * valueChanges => observable => check updated input
 * setValue => set value in input
 * 
 * FormGroup => group of controls
 * [formGroup] = groupName
 * formControlName => form group and multi inputs
 * patchValue => updated for input
 * FormBuilder
 * fomrGroupName like address { city, street }
 * ! validation
 * "" => ['', Validators.{ [required, minLength] }]
 * get control from ts formGroup.get(formControl)
 * [ invalid - dirty - touched ]
 * 
 * ! Template Driven Form
 * import { FormsModule } => @ngular/forms
 * userNameDriven in class
 *  [(ngModel)] = userNameDriven in html 
 */
