import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListeComponent } from './news/news-liste/news-liste.component';
import { NewsCreateComponent } from './news/news-create/news-create.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';

export const APP_COMMON_ROUTES: Routes =
[
    { path: 'news',  children: [
        { path: 'liste/:context', component: NewsListeComponent },
        { path: 'create', component: NewsCreateComponent },
        { path: 'details/:newsId/:context', component: NewsDetailsComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(APP_COMMON_ROUTES)],
  exports: [RouterModule]
})
export class AppCommonRoutingModule { }
