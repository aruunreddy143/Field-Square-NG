import {createAction, props} from "@ngrx/store";
import * as fromAuthInterface from "../login.model";
import {User} from "../login.model";

const TYPE = '[Auth]';

export const Login = createAction(`${TYPE} Login`, props<{params: fromAuthInterface.Login}>());
export const SignUp = createAction(`${TYPE} SignUp`, props<{params: fromAuthInterface.SignUp}>());


const USERTYPE = '[User]';

export const GetProfile = createAction(`${USERTYPE} Get Profile`);
export const SetUser = createAction(`${USERTYPE} Set User`, props<{user: User}>());
export const LoadingUser = createAction(`${USERTYPE} Loading User`);
export const ResetUser = createAction(`${USERTYPE} Reset User`);
