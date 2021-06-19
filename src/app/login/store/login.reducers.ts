import {User} from "../login.model";
import {Statuses} from "../../app.constants";
import {Action, createReducer, on} from "@ngrx/store";
import * as userActions from "./login.actions";


export interface UserState {
  data: User;
  status: Statuses
}

// @ts-ignore
export const initialState: UserState = {
  data: {
    Email: '',
    Code: '',
    AuthToken:''
  },
  status: Statuses.UNINITIALIZED,
};

// @ts-ignore
const user = createReducer(
  initialState,
  on(userActions.SetUser, (state, payload) => {
    return {
      ...state,
      data: payload.user,
      status: Statuses.LOADED
    };
  }),
  on(userActions.ResetUser, (state => ({...state, status: Statuses.UNINITIALIZED})))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return user(state, action);
}
