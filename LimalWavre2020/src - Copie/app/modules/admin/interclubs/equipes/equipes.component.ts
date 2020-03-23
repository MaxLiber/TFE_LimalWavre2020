import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { AfttClubTeamModel, AfttTeamsApiGetResponse } from './model/aftt-team.model';

@Component({
  selector: 'app-admin-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit {

  afttClubTeamModel: AfttClubTeamModel=null;
  afttTeamsApiGetResponse: AfttTeamsApiGetResponse=null;

  error: any=null;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void 
  {
  }

  onLoadEquipesFromAftt(): void
  {
    this.adminService.getAfttTeams()
      .subscribe(
        (res: AfttTeamsApiGetResponse) => {
          this.afttTeamsApiGetResponse=res;
          this.afttClubTeamModel=null;
          console.log('res', res);
          this.error=res.err;
          if(res.err !==null)
          {
            console.error('Unable to load aftt teams', res.err);
          }
          else
          {
            /*
            const data=new AfttClubTeamModel();
            data.ClubName=res.data.ClubName;
            this.afttClubTeamModel=data;
            console.log('onLoadEquipesFromAftt', data);
            */
           const resp: AfttTeamsApiGetResponse=res;
           console.log('club', resp.data.ClubName);
           this.afttClubTeamModel=resp.data;
          }
        },
        (err) => console.error('Unable to load aftt teams', err)
      )
    ;
  }
}
