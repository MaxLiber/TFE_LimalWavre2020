import { LoginAction } from './auth-login.action';
import { LogoutAction } from './auth-logout.action';

export enum AuthActionTypes {
    LoginAction = '[Login] Action',
    LogoutAction = '[Logout] Action',
  }

export type AuthActions = LoginAction | LogoutAction;
