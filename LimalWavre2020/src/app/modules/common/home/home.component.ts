import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{
  message: string = null;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void 
  {
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
