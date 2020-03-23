import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { TranslateService } from '@ngx-translate/core';

export interface MessageSeverity
{
  severity: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark';
}

@Injectable()
export class MessageService
{

  //severity: 'success' | "info" | "warning" | "danger" | "primary" | "secondary" | "light" | "dark";

  //readonly MessageSeverity='success' | "info" | "warning" | "danger" | "primary" | "secondary" | "light" | "dark";
  /*
  Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning", "danger", "primary", "secondary", "light", "dark".
  */

  
  public messageEvents = new BehaviorSubject< {m_type: string, m_message: string}>(null);
  
  constructor(
    //private translate: TranslateService
    ) { }

  /*
  emitMessage(_type: string |  string, _message: string)
  {
    this.messageEvents.next( {m_type: _type, m_message: _message} );
  }
  */
  
  // tslint:disable-next-line:variable-name
  emitMessage(_severityType: MessageSeverity |  string, _message: string)
  {
    const severity: string= (typeof _severityType === 'string') ? _severityType : _severityType.severity;
    this.messageEvents.next( {m_type: severity, m_message: _message} );
  }

  resetMessage()
  {
    this.messageEvents.next(null);
  }

  /*
  translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
      console.log(res);
      //=> 'hello world'
  });
  */
  
}
