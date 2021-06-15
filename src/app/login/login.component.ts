import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Store} from "@ngrx/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "./store/login.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });

  constructor(private store$: Store<{  }>) {}

  login(): void {
    this.store$.dispatch(Login({params: this.loginForm.value}));
  }

}
