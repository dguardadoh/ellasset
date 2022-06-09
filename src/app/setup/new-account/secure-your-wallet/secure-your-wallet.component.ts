import {Component, Input, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {SecureYourWalletNextComponent} from '../secure-your-wallet-next/secure-your-wallet-next.component';
import {RemindMeLaterComponent} from './remind-me-later/remind-me-later.component';
import {SeedPhraseView} from './seed-phrase/seed-phrase.component';

@Component({
  selector: 'app-secure-your-wallet',
  templateUrl: './secure-your-wallet.component.html',
  styleUrls: ['./secure-your-wallet.component.scss'],
})
export class SecureYourWalletComponent implements OnInit {

  @Input() routerOutlet: IonRouterOutlet;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async goToSeedPhrase(){
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: SeedPhraseView,
      breakpoints: [0.6],
      initialBreakpoint: 0.6,
      cssClass: 'modal-2'
    });
  document.getElementsByTagName('app-secure-your-wallet').item(0).classList.add('blur');
  modal.onDidDismiss().then( () => {document.getElementsByTagName('app-secure-your-wallet').item(0).classList.remove('blur');});
  modal.present();
  }

  async goToRemindMeLater(){
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: RemindMeLaterComponent,
      breakpoints: [0.35],
      initialBreakpoint: 0.35,
      cssClass: 'modal-2'
    });
  document.getElementsByTagName('app-secure-your-wallet').item(0).classList.add('blur');
  modal.onDidDismiss().then( () => {document.getElementsByTagName('app-secure-your-wallet').item(0).classList.remove('blur');});
  modal.present();
  }

  async next() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: SecureYourWalletNextComponent,
      animated: true,
       canDismiss: true,
       presentingElement: this.routerOutlet.nativeEl 
    });
  modal.present();
  }

}
