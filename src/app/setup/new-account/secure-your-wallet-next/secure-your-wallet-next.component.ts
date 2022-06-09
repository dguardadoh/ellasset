import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {WhyIsItImportantComponent} from './why-is-it-important/why-is-it-important.component';

@Component({
  selector: 'app-secure-your-wallet-next',
  templateUrl: './secure-your-wallet-next.component.html',
  styleUrls: ['./secure-your-wallet-next.component.scss'],
})
export class SecureYourWalletNextComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  gotIt(){
    this.modalCtrl.dismiss().then(() => this.modalCtrl.dismiss({continue: true}));
  }

  back() {
    this.modalCtrl.dismiss();
  }

  async whyIsItImportant(){
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: WhyIsItImportantComponent,
      breakpoints: [0.35],
      initialBreakpoint: 0.35,
      cssClass: 'modal-2'
    });
  document.getElementsByTagName('app-secure-your-wallet-next').item(0).classList.add('blur');
  modal.onDidDismiss().then( () => {document.getElementsByTagName('app-secure-your-wallet-next').item(0).classList.remove('blur');});
  modal.present();
  }
}
