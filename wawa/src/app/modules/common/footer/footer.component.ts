import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { EnvService } from '../services/env.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  angular_version='';
  // tslint:disable-next-line:variable-name
  app_version='';
  
  constructor(
    private authService: AuthService,
    private envService: EnvService,
  ) { }

  ngOnInit(): void 
  {
    this.angular_version=this.envService.getConfigAsString('angular_version');
    this.app_version=this.envService.getConfigAsString('app_version');
  }

}
