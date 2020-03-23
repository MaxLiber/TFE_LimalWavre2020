import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getHelloMessage(): Observable<string>
  {
    const url=`${environment.apiUrl}`;
    console.log('getting backend message from url ', url);
    return this.httpClient.get( url, {responseType: 'text'} );
  }
}
