import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsPage } from './payments.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsPage
  },
  {
    path: '',
    loadChildren: () => import('./payments.page').then( m => m.PaymentsPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsPageRoutingModule {}
