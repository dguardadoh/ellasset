import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remind-me-later',
  templateUrl: './remind-me-later.component.html',
  styleUrls: ['./remind-me-later.component.scss'],
})
export class RemindMeLaterComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  goToHome(){
    this.modalCtrl.dismiss();
  }

  continue() {
    this.modalCtrl.dismiss();
  }
}
