import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZippiePageRoutingModule } from './zippie-routing.module';

import { ZippiePage } from './zippie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZippiePageRoutingModule
  ],
  declarations: [ZippiePage]
})
export class ZippiePageModule {}
