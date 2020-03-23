import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageModel } from '../../../common/model/message.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService 
{

  constructor(private httpClient: HttpClient ) { }

  sendMessage(nom: string, sujet: string, email: string, message: string): Observable<MessageModel>
  {
    /*
    const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
    const apiUrl=`${environment.apiUrl}/contact/sendmessage`;
    const data={ sujet: sujet, email: email, message: message};
    const postData = new FormData();
    postData.append('body' , JSON.stringify(data) );
    return this.httpClient.post<MessageModel>(apiUrl,  postData);
    */
   
    const apiUrl=`${environment.apiUrl}/contact/sendMessage`;
    return this.httpClient.post<MessageModel>(apiUrl,  {name: nom, subject: sujet, email, message} );
  }

  /*
  sendMessage(jsonMessage: string): Observable<MessageModel>
  {
    const apiUrl=`${environment.apiUrl}/contact/sendmessage2`;
    // const data={ sujet: sujet, email: email, message: message};
    const postData = new FormData();
    postData.append('body' , JSON.stringify(jsonMessage) );
    return this.httpClient.post<MessageModel>(apiUrl,  postData);
  }
  */
}
