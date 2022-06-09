import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-seed-phrase-view',
  templateUrl: './seed-phrase.component.html',
  styleUrls: ['./seed-phrase.component.scss'],
})
export class SeedPhraseView implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

}
