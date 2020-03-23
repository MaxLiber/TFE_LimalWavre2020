import { AuthGroupRoleModel } from './auth-group-role.model';

export class AuthGroupModel {
    id: number;
    name: string;
    authGroupRole: Array<AuthGroupRoleModel>;
}
