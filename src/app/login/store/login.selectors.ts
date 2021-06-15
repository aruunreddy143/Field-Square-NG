import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./login.reducers";
import {Statuses} from "../../app.constants";

export const userState = createFeatureSelector<UserState>('user');

export const isUserLoading = createSelector(
  userState,
  (state: UserState) => state.status === Statuses.LOADING
);
