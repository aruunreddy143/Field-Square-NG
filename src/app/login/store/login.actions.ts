import { createAction, props } from '@ngrx/store';
import {Login} from '../login.model';
export const addLogin = createAction(
'[Login] Add Login',
  (login: Login) => ({login})
);
