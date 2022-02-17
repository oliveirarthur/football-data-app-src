import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsByCompetitionListPage } from './teams-by-competition-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsByCompetitionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsByCompetitionListPageRoutingModule {}
