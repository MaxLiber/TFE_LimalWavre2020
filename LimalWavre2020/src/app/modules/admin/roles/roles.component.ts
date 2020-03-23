import { Component, OnInit } from '@angular/core';
import { AuthDomainModel } from '../../auth/model/auth-user.model';
import { AdminRoleService } from './services/admin-role.service';
import { AuthGroupModel } from '../../auth/model/auth-group.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  domains: Array<AuthDomainModel>;
  groups: Array<AuthGroupModel>;
  
  constructor(
    private adminRoleService: AdminRoleService,
  ) { }

  ngOnInit(): void 
  {
    this.adminRoleService.getAllDomains()
      .subscribe(res => this.domains=res);

    this.adminRoleService.getAllGroups()
      .subscribe(res => this.groups=res);
  }

}
