import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {SeedPhraseComponent} from './seed-phrase.component';



@NgModule({
  declarations: [SeedPhraseComponent],
  exports: [SeedPhraseComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild()
  ]
})
export class SeedPhraseModule { }
