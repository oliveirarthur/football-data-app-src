import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionsListPage } from './competitions-list.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionsListPageRoutingModule {}
