import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.page.html',
  styleUrls: ['./account-view.page.scss'],
})
export class AccountViewPage implements OnInit {
  user:  any//Client | User | undefined = undefined;
  isUser : Boolean = false

  constructor() {}

  ngOnInit() {
    // this.user = {
    //   id: '',
    //   username: 'user name',
    //   email: '',
    //   firstname: '',
    //   lastname: ' ',
    //   phoneNumber: ' ',
    //   password: '',
    //   postalCode: '',
    //   address: `> ng.cmd generate service state-service --project=app
    //   CREATE src/app/state-service.service.spec.ts (388 bytes)
    //   CREATE src/app/state-service.service.ts (141 bytes)`,
    //   isActive: true,
    // };

    this.user = {
      id: '',
      username: 'user name',
      key: '',
      name: '',
      postalCode: '',
      address: `> ng.cmd generate service state-service --project=app
      CREATE src/app/state-service.service.spec.ts (388 bytes)
      CREATE src/app/state-service.service.ts (141 bytes)`,
      isActive: true,
      password : ''
    };
  }
}
