import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  alert: IAlert;
  messageEventsSubscription: Subscription;
  
  constructor(private messageService: MessageService ) { }

  /*
  Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning", "danger", "primary", "secondary", "light", "dark".
  */
  ngOnInit() 
  {
   // this.alert={type: 'danger', message: 'Construction en cours - mise &#224; jour: 11 Mars 2018'};
    this.messageService.messageEvents.subscribe(
      res => {
        if(res!==null)
        {
         this.alert={type: res.m_type, message: res.m_message};
        }
        else
        {
          this.onCloseAlert();
        }
      }
    );
  }
  
 onCloseAlert() 
{
    this.alert=null;
  }
}

export interface IAlert {
  // id: number;
  type: string;
  message: string;
}
