import {Action, createReducer, on} from '@ngrx/store';
import * as LoginActions from './login.actions';
import {Login} from "../login.model";

export const loginFeatureKey = 'login';

export interface LoginState {
  login: Login;
}

export const initialState: {} = {}

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.addLogin, (state, login) =>({...state,login}))
);

export function reducer(state: LoginState | undefined, action: Action): any {
  return loginReducer(state, action);
}
