import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Login} from "./login.model";
import {LoginState} from './store/login.reducer';
import {selectLogin} from './store/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login$: Observable<Login>;
  constructor(private store: Store<LoginState>) {
    this.login$ = this.store.pipe(select(selectLogin));
    console.log(this.login$);
  }

  ngOnInit(): void {
    // this.store.dispatch(({name: "test", password: 'salsa'}));
  }

}
