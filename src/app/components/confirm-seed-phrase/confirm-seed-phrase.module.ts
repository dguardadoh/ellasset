import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {ConfirmSeedPhraseComponent} from './confirm-seed-phrase.component';



@NgModule({
  declarations: [ConfirmSeedPhraseComponent],
  exports: [ConfirmSeedPhraseComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild()
  ]
})
export class ConfirmSeedPhraseModule { }
