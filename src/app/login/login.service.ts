import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Login, SignUp, Tokens} from "./login.model";
import {User} from "./login.model";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';


interface SignedUp {
  id: number;
  status: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(loginParams: Login): Observable<Tokens> {
    let headers = new HttpHeaders({'X-Client': '568'});
    console.log(headers);
    return this.http.post<Tokens>('https://staging.fieldsquared.com/Authentication',
      {...loginParams}, {headers}
    );
  }

  signUp(signUpParams: SignUp): Observable<SignedUp> {
    return this.http.post<SignedUp>('/auth/sign-up', signUpParams);
  }
}
