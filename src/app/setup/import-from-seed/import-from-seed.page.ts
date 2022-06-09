import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-import-from-seed',
  templateUrl: './import-from-seed.page.html',
  styleUrls: ['./import-from-seed.page.scss'],
})
export class ImportFromSeedPage implements OnInit {

  loginForm: FormGroup;
  seedPhrase: string;
  wordCount: number;
  showPassPhrase = false;
  showNewPassword = false;
  showConfirmPassword = false;
  constructor(/*private formBuilder: FormBuilder*/) { }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   seedPhrase: ['', [this.only12Words(), Validators.pattern('[a-z ]*'),Validators.required] ]
    // }
    // )
    this.loginForm = new FormGroup({
      seedPhrase: new FormControl('', [this.only12Words(), Validators.pattern('[a-z ]*'), Validators.required]),
      newPassword: new FormControl('', [this.checkPasswordValidation(), Validators.required, this.matchConfirmPassword('newPassword')]),
      confirmPassword: new FormControl('',[ Validators.required, this.matchConfirmPassword()])
      });
  }

  seedPhraseChangeChars(event) {
    this.loginForm.patchValue({ seedPhrase: event.target.value.endsWith(' ') ? event.target.value.trim()+' ' :event.target.value});
  }

  only12Words(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let res = false;
      if (control.value.length > 0) {
        res = control.value.match(/(\w+)/g).length === 12
      }
      return !res ? {only12Words: {value: res}} : null;
    };
  }

  checkPasswordValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(control.value)) {
      return {passwordNoWhitespaces: true};
    }


    const isContainsUppercase = /^(?=.*[A-Z])/;
    if (!isContainsUppercase.test(control.value)) {
      return {passwordUppercaseCharacter: true};
    }


    const isContainsLowercase = /^(?=.*[a-z])/;
    if (!isContainsLowercase.test(control.value)) {
      return {passwordLowercaseCharacter: true};
    }


    const isContainsNumber = /^(?=.*[0-9])/;
    if (!isContainsNumber.test(control.value)) {
      return {passwordOneDigit: true};
    }


    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    if (!isContainsSymbol.test(control.value)) {
      return {passwordOneSpecialSymbol: true};
    }


    const isValidLength = /^.{10,16}$/;
    if (!isValidLength.test(control.value)) {
      return {password10_16CharactersLong: true};
    }

    return null;
  }
  
  }

  matchConfirmPassword(field: string = 'confirmPassword'): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      let res = {passwordsDoNotMatch: true};
      if (field === 'confirmPassword') {
        res = this.loginForm?.controls.newPassword.value !== control.value ? res : null;
      } else {
        this.loginForm?.controls.confirmPassword.setErrors(this.loginForm?.controls.confirmPassword.value !== control.value ? res: null);
        return null;
      }
      return res
    }
  }

  showHidePassPhrase() {
    this.showPassPhrase = !this.showPassPhrase;
  }

  showHideNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  showHideConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

}
