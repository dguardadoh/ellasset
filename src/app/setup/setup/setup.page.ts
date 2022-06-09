import { ImportFromSeedPage } from './../import-from-seed/import-from-seed.page';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  async goToImportFromSeed(){
    const modal = await this.modalCtrl.create({
      component: ImportFromSeedPage,
      animated: true,
      canDismiss: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    modal.present();
  }

  goToNewAccount() {
    this.router.navigate(['new-wallet'], {relativeTo: this.activatedRoute});
  }

}
