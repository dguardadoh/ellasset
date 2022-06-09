import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPageRoutingModule } from './setup-routing.module';

import { SetupPage } from './setup.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SetupPage]
})
export class SetupPageModule {}
