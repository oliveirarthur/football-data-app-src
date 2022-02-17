import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompetitionsService } from 'src/app/services/competitions.service';

import { CompetitionsListPageRoutingModule } from './competitions-list-routing.module';
import { CompetitionsListPage } from './competitions-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionsListPageRoutingModule,
  ],
  declarations: [CompetitionsListPage],
  providers: [CompetitionsService],
})
export class CompetitionsListPageModule {}
