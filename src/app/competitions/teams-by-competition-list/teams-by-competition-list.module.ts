import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TeamsByCompetitionListPageRoutingModule } from './teams-by-competition-list-routing.module';
import { TeamsByCompetitionListPage } from './teams-by-competition-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TeamsByCompetitionListPageRoutingModule,
  ],
  declarations: [TeamsByCompetitionListPage],
})
export class TeamsByCompetitionListPageModule {}
