import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountViewPage } from './account-view.page';

const routes: Routes = [
  {
    path: '',
    component: AccountViewPage
  },
  {
    path: 'alerts-view',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountViewPageRoutingModule {}
