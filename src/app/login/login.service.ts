import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Login, SignUp, Tokens} from "./login.model";
import {User} from "./login.model";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';


interface SignedUp {
  id: number;
  status: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(loginParams: Login): Observable<Tokens> {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Headers': 'accept, x-client, content-type, x-workspace, x-auth-token, type, userid, method, authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Origin': 'https://localhost:63343',
      'X-Auth-Token': 'b325eebd-7b13-4961-b099-f578bcc7138c',
      'Content-Type': 'application/json; charset=utf-8'});
    return this.http.post<Tokens>('https://staging.fieldsquared.com/Authentication',
      {...loginParams, Code: null, DeviceId: "90.253.210.217"},
      {headers}
  );
  }

  signUp(signUpParams: SignUp): Observable<SignedUp> {
    return this.http.post<SignedUp>('/auth/sign-up', signUpParams);
  }
}
