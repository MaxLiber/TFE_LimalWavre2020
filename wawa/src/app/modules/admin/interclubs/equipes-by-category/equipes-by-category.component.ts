import { Component, OnInit, Input } from '@angular/core';
import { AfttTeamModel } from '../model/aftt-team.model';

@Component({
  selector: 'app-admin-equipes-by-category',
  templateUrl: './equipes-by-category.component.html',
  styleUrls: ['./equipes-by-category.component.scss']
})
export class EquipesByCategoryComponent implements OnInit 
{

  @Input()
  teams: Array<AfttTeamModel>;
  @Input()
  category: number;
  @Input()
  matchType: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
