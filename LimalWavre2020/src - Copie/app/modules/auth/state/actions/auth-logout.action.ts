import { AuthActionTypes } from './auth.actions';
import { Action } from '@ngrx/store';

export class LogoutAction implements Action {

    readonly type = AuthActionTypes.LogoutAction;

    constructor() {}
}


