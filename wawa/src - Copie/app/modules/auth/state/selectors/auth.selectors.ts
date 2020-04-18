import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../auth-state';

export const selectAuthState
// = state => state.profilesModule.data;
= createFeatureSelector<AuthState>('authModule');

export const selectAuthenticatedUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);

export const selectUserIsLoggedIn = createSelector(
    selectAuthState,
    (state: AuthState) => state.loggedIn
);
