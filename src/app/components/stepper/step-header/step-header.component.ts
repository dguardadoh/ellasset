import { Component, Input, OnInit } from '@angular/core';
import { IonicStepStatus } from '../step/step.component';

@Component({
  selector: 'app-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss'],
  host: { '[class.ionic-step-header-status-error]': 'isError'},
})
export class StepHeaderComponent implements OnInit {

  @Input() label: string;
  @Input() description: string;
  @Input() icon = 'number';
  @Input() errorIcon = 'close';
  @Input() index: number;
  @Input() active = false;
  @Input() status: IonicStepStatus = '';

  get isError(): boolean { return this.status === 'error'; }
  
  constructor() { }

  ngOnInit() {}


}
