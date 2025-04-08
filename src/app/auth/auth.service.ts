import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token = '';

  constructor(private http: HttpClient) {}

  login(clientId: string, clientSecret: string) {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('scope', 'read');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
    });

    return this.http
      .post<any>('http://localhost:8080/oauth2/token', body.toString(), {
        headers,
      })
      .pipe(tap((res) => (this.token = res.access_token)));
  }

  getToken() {
    return this.token;
  }
}
