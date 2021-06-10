import {
  ActionReducer,
  ActionReducerMap, combineReducers,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {loginReducer} from "../login/store/login.reducer";

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const reducer = combineReducers({
  featureA: loginReducer
});

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  loginReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];
