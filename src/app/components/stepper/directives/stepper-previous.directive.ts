import { Directive } from '@angular/core';
import { StepperComponent } from '../stepper.component';

/** Button that moves to the previous step in a stepper workflow. */
@Directive({
  selector: '[stepperPrevious]',
  host: {'(click)': '_stepper.previousStep()',}
})
export class StepperPreviousDirective {

  constructor(public _stepper: StepperComponent) { }

}
