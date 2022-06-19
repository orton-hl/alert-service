import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(private httpClient: HttpClient) {}

  registerUser(user: any): Observable<User> {
    console.log(
      environment.apiBaseURL + environment.apiEndpoints.users_register_user
    );

    let payload = {

    }

    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    // return null;

    return this.httpClient.post<any>(
      environment.apiBaseURL + environment.apiEndpoints.users_register_user,
      user,
      {
        headers: new HttpHeaders()
          .append('Accept', 'application/json')
          .append('Content-Type', 'application/json'),
      }
    );
  }
}
