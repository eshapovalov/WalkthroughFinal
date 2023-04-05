import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'styleguide',
    loadChildren: () => import('./styleguide/styleguide.module').then(m => m.StyleguidePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'settings/profile/edit',
    loadChildren: () => import('./profile/edit/edit.module').then(m => m.EditPageModule)
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'zippie',
    loadChildren: () => import('./zippie/zippie.module').then( m => m.ZippiePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SecureRoutingModule { }
