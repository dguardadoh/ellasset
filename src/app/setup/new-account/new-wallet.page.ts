
import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {StepperComponent} from 'src/app/components/stepper/stepper.component';
import {SecureYourWalletComponent} from './secure-your-wallet/secure-your-wallet.component';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.page.html',
  styleUrls: ['./new-wallet.page.scss'],
})
export class NewWalletPage implements OnInit {
  
  loginForm: FormGroup;
  showNewPassword = false;
  showConfirmPassword = false;
  continueStep2 = false;
  confirmPasswordDone: boolean;
  @ViewChild('stepper') stepper: StepperComponent;
  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      newPassword: new FormControl('', [this.checkPasswordValidation(), Validators.required, this.matchConfirmPassword('newPassword')]),
      confirmPassword: new FormControl('',[ Validators.required, this.matchConfirmPassword()])
      });
  }

  selectChange(e) {
    console.log(e);
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

  showHideNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  showHideConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async next(){
     const modal = await this.modalCtrl.create({
       component: SecureYourWalletComponent,
       componentProps: {routerOutlet: this.routerOutlet},
       animated: true,
       canDismiss: true,
       presentingElement: this.routerOutlet.nativeEl 
      });
      modal.onDidDismiss().then( data => {
        if (data.data.continue) {
          this.stepper.nextStep();
        }});
      modal.present();
  }

}
