import { TokensModel } from './tokens.model';
import { AuthUserModel, AuthRoleModel } from './auth-user.model';

export class AuthenticatedUserModel extends AuthUserModel {
    tokens: TokensModel;
    roles: Array<AuthRoleModel>;
}
