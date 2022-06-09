import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {StepperModule} from '../../components/stepper/stepper.module';
import {ConfirmSeedPhraseModule} from './../../components/confirm-seed-phrase/confirm-seed-phrase.module';
import {SeedPhraseModule} from './../../components/seed-phrase/seed-phrase.module';
import {NewWalletPagePageRoutingModule} from './new-wallet-routing.module';
import {NewWalletPage} from './new-wallet.page';
import {SecureYourWalletNextComponent} from './secure-your-wallet-next/secure-your-wallet-next.component';
import {WhyIsItImportantComponent} from './secure-your-wallet-next/why-is-it-important/why-is-it-important.component';
import {RemindMeLaterComponent} from './secure-your-wallet/remind-me-later/remind-me-later.component';
import {SecureYourWalletComponent} from './secure-your-wallet/secure-your-wallet.component';
import {SeedPhraseView} from './secure-your-wallet/seed-phrase/seed-phrase.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWalletPagePageRoutingModule,
    StepperModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    SeedPhraseModule,
    ConfirmSeedPhraseModule
  ],
  declarations: [NewWalletPage, SecureYourWalletComponent, SecureYourWalletNextComponent, SeedPhraseView, RemindMeLaterComponent, WhyIsItImportantComponent]
})
export class NewAccountPageModule {}
