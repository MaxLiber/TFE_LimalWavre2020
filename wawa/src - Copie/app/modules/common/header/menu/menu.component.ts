import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthenticatedUserModel } from '../../../auth/model/authenticated-user.model';
import { Subscription } from 'rxjs';
import { NavbarComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  user: AuthenticatedUserModel = null;
  userEventsSubscription: Subscription;

  @ViewChild('navbar', { static: true }) navbar: NavbarComponent;
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void 
  {
    this.userEventsSubscription = this.authService.userEvents.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() 
  {
    if (this.userEventsSubscription) this.userEventsSubscription.unsubscribe();
  }

  getLogoImageUrl()
  {
    return './assets/img/Logo_Liwa_2020.jpg';
    //  return './assets/img/Logo_Liwa_2020.jpg';
  }

  onLogoClicked()
  {
    this.navigateHome();
  }
  
  navigateHome()
  {
    this.router.navigate(['']);
  }

  getAuthService(): AuthService
  {
    return this.authService;
  }

  isSaisonActive(): boolean
  {
    console.warn('this method should be deleted !');
    return false;
  }

  onLogin(event) 
  {
    this.router.navigate(['auth', 'login']);
    this.navbar.hide();
  }

  onLogout(event)
  {
    event.preventDefault();
    this.authService.logout();
    this.navigateHome();
    this.navbar.hide();
  }
}
