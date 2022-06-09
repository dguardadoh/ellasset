import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

export type IonicStepStatus = ('' | 'error');

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {

  index: number;

  @Input() disabled: boolean;
  @Input() label: string;
  @Input() description: string;
  @Input() icon = 'number';
  @Input() errorIcon = 'close';
  @Input() status: IonicStepStatus = '';

  @ViewChild(TemplateRef) content: TemplateRef<any>;
  constructor() { }

  ngOnInit() {}

}
