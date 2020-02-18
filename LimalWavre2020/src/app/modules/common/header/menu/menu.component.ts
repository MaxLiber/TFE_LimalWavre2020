import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: any; // NOT A GOOD IDEA HERE !Temporary solution !

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
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

  onLogout(event)
  {
    event.preventDefault();
  }
}
