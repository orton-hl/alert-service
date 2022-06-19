import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountViewPageRoutingModule } from './account-view-routing.module';

import { AccountViewPage } from './account-view.page';
import { HeaderModule } from '../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountViewPageRoutingModule,
    HeaderModule
  ],
  declarations: [AccountViewPage]
})
export class AccountViewPageModule {}
