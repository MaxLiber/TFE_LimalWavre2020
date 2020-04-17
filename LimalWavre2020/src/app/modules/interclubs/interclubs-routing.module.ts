import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeuilleDeMatchComponent } from './feuille-de-match/feuille-de-match.component';

export const INTERCLUBS_ROUTES: Routes =
[
    { path: 'interclubs',  children: [
            { path: 'feuille', component: FeuilleDeMatchComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(INTERCLUBS_ROUTES)],
  exports: [RouterModule]
})
export class InterclubsRoutingModule { }
