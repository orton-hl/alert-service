import { Injectable } from '@angular/core';
import { AccountSummary } from '../models/account';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class StateServiceService {
  userData: AccountSummary = null;

  constructor() {}

  setUser(accSumary: AccountSummary) {
    this.userData = accSumary;
  }
}
