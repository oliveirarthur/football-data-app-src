import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionsPage } from './competitions.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionsPage,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./competitions-list/competitions-list.module').then(
            (m) => m.CompetitionsListPageModule
          ),
      },
      {
        path: ':competitionID/teams/:teamID',
        loadChildren: () =>
          import('./team-details/team-details.module').then(
            (m) => m.TeamDetailsPageModule
          ),
      },
      {
        path: ':competitionID/teams',
        loadChildren: () =>
          import(
            './teams-by-competition-list/teams-by-competition-list.module'
          ).then((m) => m.TeamsByCompetitionListPageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionsPageRoutingModule {}
