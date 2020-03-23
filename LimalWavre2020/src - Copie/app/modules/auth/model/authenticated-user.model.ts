import { TokensModel } from './tokens.model';
import { AuthUserModel } from './auth-user.model';

export class AuthenticatedUserModel extends AuthUserModel {
    tokens: TokensModel;
}
