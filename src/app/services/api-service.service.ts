import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountSummary } from '../models/account';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';


type Credentials = { username: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(private httpClient: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      environment.apiBaseURL + environment.apiEndpoints.users_register_user,
      user,
      {
        headers: new HttpHeaders()
          .append('Accept', 'application/json')
          .append('Content-Type', 'application/json'),
      }
    );
  }

  registerClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(
      environment.apiBaseURL + environment.apiEndpoints.users_register_user,
      client,
      {
        headers: new HttpHeaders()
          .append('Accept', 'application/json')
          .append('Content-Type', 'application/json'),
      }
    );
  }

  siginIn(credentials: Credentials): Observable<AccountSummary> {
    return this.httpClient.post<AccountSummary>(
      environment.apiBaseURL + environment.apiEndpoints.login,
      credentials,
      {
        headers: new HttpHeaders()
          .append('Accept', 'application/json')
          .append('Content-Type', 'application/json'),
      }
    );
  }
}
