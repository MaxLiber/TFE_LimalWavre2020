import { AuthUserGroupModel } from './auth-user-group.model';

export class AuthUserModel {
    id: number;
    username: string;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    mustChangePassword: boolean;
    changePasswordJeton: string;
    enabled: boolean;
    authUserGroup: AuthUserGroupModel;
}

export class AuthDomainModel
{
    id: number;
    domain: string;
    commentaire: string;
}

export class AuthRoleModel 
{
    id: number;
    role: string;
    authDomain: AuthDomainModel;
}
