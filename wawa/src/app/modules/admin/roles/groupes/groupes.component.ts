import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthGroupModel } from '../../../auth/model/auth-group.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminRoleService } from '../services/admin-role.service';

export class GroupEvent
{
  eventName: string;
  groups?: Array<AuthGroupModel>;
}

@Component({
  selector: 'app-admin-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.scss']
})
export class GroupesComponent implements OnInit {

  @Input()
  groups: Array<AuthGroupModel>;
  
  @Output()
  groupEvent = new EventEmitter<GroupEvent>();
  
  groupForm: FormGroup;

  constructor(
    private adminRoleService: AdminRoleService,
    private formBuilder: FormBuilder, 
  ) { }

  ngOnInit(): void 
  {
    this.groupForm = this.formBuilder.group({
      nom: ['', Validators.required],
      commentaire: [''],
    });
  }

  onCreateGroup()
  {
    const formValue=this.groupForm.value;
    console.log('Creating new auth domain', formValue.nom, formValue.commentaire);
    this.adminRoleService.createNewGroup(formValue.nom, formValue.commentaire)
      .subscribe( (res: AuthGroupModel) => {
        if(res!==null && res!==undefined)
        {
          let newGroups = new Array<AuthGroupModel>();
          Object.assign(newGroups, this.groups);
          newGroups.push(res);
          newGroups = newGroups.sort( (d1, d2) => {
            if(d1.name < d2.name) return -1;
            if(d1.name > d2.name) return 1;
            return 0;
          });
          this.groups=newGroups;
          this.groupEvent.emit( {eventName: 'DOMAIN_ADDED', groups: this.groups} );
        }
      });
  }
}
