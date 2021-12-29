import { AbstractControl, FormGroup } from "@angular/forms";

// export function customeValidator(control: AbstractControl) { // control => input name
//     console.log('custom validator', control);
//     let password = control.get('Password')?.value;
//     let confirmPass = control.get('ConfirmPassword')?.value;
//     if(password === confirmPass) {
//         return null;
//     }
//     return {passwordNotMatch: true}; // custome error errors { key: value }
// }

export function checkNumber(control: AbstractControl) {
    /// any code 
    return null;
}

export function matchingPassword(formGroup: FormGroup): {[key: string]: boolean} | null {
    console.log(formGroup);
    
    const password = formGroup.controls['Password']; // formGroup.controls.Password
    const confirmPassword = formGroup.controls['ConfirmPassword']; // formGroup.controls.ConfirmPassword

    if(password.dirty && confirmPassword.dirty && password.value !== confirmPassword.value) {
        return { notMatching: true } // error global
        // confirmPassword.setErrors({ NotMatching: true })
    }
    return null
}




/**
 * Custome Validator [ control: AbstractControl - formGroup: FormGroup ]
 * Big Function with paramters
 */