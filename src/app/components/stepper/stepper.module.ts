import { StepperPreviousDirective } from './directives/stepper-previous.directive';
import { StepperNextDirective } from './directives/stepper-next.directive';
import { IonicModule } from '@ionic/angular';
import { StepHeaderComponent } from './step-header/step-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { StepComponent } from './step/step.component';


@NgModule({
  declarations: [StepperComponent, StepComponent, StepHeaderComponent, StepperNextDirective, StepperPreviousDirective],
  exports: [StepperComponent, StepComponent, StepHeaderComponent, StepperNextDirective, StepperPreviousDirective],
  imports: [
    CommonModule,
    IonicModule,  
  ]
})
export class StepperModule { }
