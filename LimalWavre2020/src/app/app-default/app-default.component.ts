import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-default',
  templateUrl: './app-default.component.html',
  styleUrls: ['./app-default.component.scss']
})
export class AppDefaultComponent implements OnInit 
{

  title = 'Liwa Site 2';
  message: string = null;

  constructor(
    private appService: AppService,
    private router: Router,
  ) { }

  ngOnInit(): void
  {
    //console.log('browser:',this.deviceService.browser);
  }

  onSayHello(): void
  {
    // this.message='hello';

    this.appService.getHelloMessage()
      .subscribe(
        message => this.message = message
         ,
         err => console.error('Error getting backend message!', err)
      );
  }
  onLogin(): void
  {
    this.router.navigate(['login']);
  }
}
