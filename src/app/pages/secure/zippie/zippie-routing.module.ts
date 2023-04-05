import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Platform, NavController } from '@ionic/angular';

import { ZippiePage } from './zippie.page';

const routes: Routes = [
  {
    path: '',
    component: ZippiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class ZippiePageRoutingModule {}
