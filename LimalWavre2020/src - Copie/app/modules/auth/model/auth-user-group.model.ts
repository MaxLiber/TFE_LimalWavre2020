import { AuthGroupModel } from './auth-group.model';

export class AuthUserGroupModel {
    id: number;
    authUserId: number;
    authGroupId: number;
    authGroup: AuthGroupModel;
}
