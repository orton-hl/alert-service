import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';
import { StateServiceService } from '../services/state-service.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.page.html',
  styleUrls: ['./account-view.page.scss'],
})
export class AccountViewPage implements OnInit {
  account: any;
  isUser : Boolean = false

  constructor(public stateService : StateServiceService) {}

  ngOnInit() {
    this.account = this.stateService.userData.account
    this.isUser = this.stateService.userData.isUser
  }
}
