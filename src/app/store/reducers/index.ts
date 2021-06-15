import {
  ActionReducer,
  ActionReducerMap, combineReducers,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {userReducer, UserState} from '../../login/store/login.reducers'

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const reducer = combineReducers({
});

export interface AppState {
  login: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: userReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];
