import { AuthRoleModel } from './auth-role.model';

export class AuthGroupRoleModel {
    id: number;
    authGroupId: number;
    authRoleId: number;
    authRoleName: AuthRoleModel;
}
