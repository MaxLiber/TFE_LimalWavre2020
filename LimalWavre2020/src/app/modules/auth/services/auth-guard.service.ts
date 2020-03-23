import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthenticatedUserModel } from '../model/authenticated-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(
    public authService: AuthService,
    public router: Router) { }


  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const redirectUrl = route.data.authGuardRedirect;
    return true;
    
    /*
    if (await this.authService.checkTokenStatus()) {
      const user: AuthenticatedUserModel = this.authService.getCurrentUser();
      if (!(user.authUserGroup.authGroup.authGroupRole.find(role => {
        if (role.authRoleName.name === 'Viewer') {
          return true;
        }
      }))) {
        return false;
      }
      return true;
    } else {
      // navigate to log in screen
      if ( redirectUrl !== null && redirectUrl !== undefined ) {
        this.router.navigate(['auth', 'login', redirectUrl]);
      } else {
        this.router.navigate(['auth', 'login']);
      }
      return false;
    }
    */
  }

}
