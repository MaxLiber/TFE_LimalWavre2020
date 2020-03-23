import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthDomainModel } from '../../../auth/model/auth-user.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AuthGroupModel } from '../../../auth/model/auth-group.model';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllDomains(): Observable<Array<AuthDomainModel>>
  {
    const url=`${environment.apiUrl}`;  
    const apiUrl = `${url}/auth/domainList`;
    return this.httpClient.get<Array<AuthDomainModel>>(apiUrl);
  }

  createNewDomain(domainName: string, domainCommentaire: string): Observable<AuthDomainModel>
  {
    const url=`${environment.apiUrl}`;  
    const apiUrl = `${url}/auth/domainCreate`;
    return this.httpClient.post<AuthDomainModel>(apiUrl, { domainName, domainCommentaire });
  }

  getAllGroups(): Observable<Array<AuthGroupModel>>
  {
    const url=`${environment.apiUrl}`;  
    const apiUrl = `${url}/auth/groupList`;
    return this.httpClient.get<Array<AuthGroupModel>>(apiUrl);
  }

  createNewGroup(name: string, commentaire: string): Observable<AuthGroupModel>
  {
    const url=`${environment.apiUrl}`;  
    const apiUrl = `${url}/auth/groupCreate`;
    return this.httpClient.post<AuthGroupModel>(apiUrl, { name, commentaire });
  }

}
