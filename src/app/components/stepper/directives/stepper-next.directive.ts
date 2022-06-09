import { Directive } from '@angular/core';
import { StepperComponent } from '../stepper.component';

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  selector: '[stepperNext]',
  host: { '(click)': '_stepper.nextStep()', }
})
export class StepperNextDirective {

  constructor(public _stepper: StepperComponent) { }

}
