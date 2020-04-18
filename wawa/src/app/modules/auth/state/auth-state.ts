import { AuthenticatedUserModel } from '../model/authenticated-user.model';

export interface AuthState {
    loggedIn: boolean;
    user: AuthenticatedUserModel;
}

export const initialAuthState: AuthState = {
    loggedIn: false,
    user: null
};
