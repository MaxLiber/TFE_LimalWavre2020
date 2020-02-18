import { AuthActionTypes } from './auth.actions';
import { Action } from '@ngrx/store';
import { AuthenticatedUserModel } from '../../model/authenticated-user.model';

export class LoginAction implements Action {

    readonly type = AuthActionTypes.LoginAction;

    constructor( public payload: {user: AuthenticatedUserModel} ) {}
}


