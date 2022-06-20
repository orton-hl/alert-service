import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountSummary } from '../models/account';
import { Alert } from '../models/alert.model';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';

type Credentials = { username: string; password: string };

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(private httpClient: HttpClient) {}

  private postToApi<Payload, RetunType>(
    endPoint: string,
    payload: Payload
  ): Observable<RetunType> {
    return this.httpClient.post<RetunType>(
      environment.apiBaseURL + endPoint,
      payload,
      {
        headers: new HttpHeaders()
          .append('Accept', 'application/json')
          .append('Content-Type', 'application/json'),
      }
    );
  }

  private getFromApi<Respose>(endPoint: string): Observable<Respose> {
    return this.httpClient.get<Respose>(environment.apiBaseURL + endPoint, {
      headers: new HttpHeaders()
        .append('Accept', 'application/json')
        .append('Content-Type', 'application/json'),
    });
  }

  registerUser(user: User): Observable<User> {
    return this.postToApi<User, User>(
      environment.apiEndpoints.users_register_user,
      user
    );
  }

  registerClient(client: Client): Observable<Client> {
    return this.postToApi<Client, Client>(
      environment.apiEndpoints.clients_register_client,
      client
    );
  }

  siginIn(credentials: Credentials): Observable<AccountSummary> {
    return this.postToApi<Credentials, AccountSummary>(
      environment.apiEndpoints.login,
      credentials
    );
  }

  postAlert(alert: Alert): Observable<Alert> {
    return this.postToApi<Alert, Alert>(
      environment.apiEndpoints.alerts_send_alert,
      alert
    );
  }

  getAllAlerts(userId: string): Observable<Alert[]> {
    let params: HttpParams = new HttpParams().set('userId', userId);
    return this.httpClient.get<Alert[]>(
      environment.apiBaseURL + environment.apiEndpoints.alerts_get_alert_for,
      { params }
    );
  }

  resolveAlert(alert: Alert) : Observable<Alert>{
    alert.isActive = false;
    alert.isResolved = true;
    return this.httpClient.put<Alert>(
      environment.apiBaseURL + environment.apiEndpoints.alerts_update_alert,
      alert
    );
  }
}
