import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy
{
  message: string = null;

  userEvenSubscription: Subscription=null;

  editPageAllowed=false;
  
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void 
  {
    this.userEvenSubscription=this.authService.userEvents.subscribe(
      event => {
        //console.log('User event:' + event);
        if(event!=null && this.authService.isUserClubAdmin)
        {
          this.editPageAllowed=true;
        }
        else
        {
          this.editPageAllowed=false;
        }
      }
    );
  }

  ngOnDestroy() 
  {
    if(this.userEvenSubscription!==null) this.userEvenSubscription.unsubscribe();
  }

  onSayHello(): void
  {
    this.appService.getHelloMessage()
      .subscribe(
        message => this.message = message
          ,
          err => console.error('Error getting backend message!', err)
    );
  }


}
