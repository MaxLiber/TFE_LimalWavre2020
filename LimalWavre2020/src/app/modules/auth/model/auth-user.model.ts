import { AuthUserGroupModel } from './auth-user-group.model';

export class AuthUserModel {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    enabled: boolean;
    authUserGroup: AuthUserGroupModel;
}
