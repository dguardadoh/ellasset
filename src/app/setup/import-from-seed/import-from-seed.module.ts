import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportFromSeedPageRoutingModule } from './import-from-seed-routing.module';

import { ImportFromSeedPage } from './import-from-seed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ImportFromSeedPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ImportFromSeedPage]
})
export class ImportFromSeedPageModule {}
