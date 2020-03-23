import { AuthUserGroupModel } from './auth-user-group.model';

export class AuthUserModel {
    id: number;
    username: string;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    mustChangePassword: boolean;
    enabled: boolean;
    authUserGroup: AuthUserGroupModel;
}
