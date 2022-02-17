import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.page.html',
  styleUrls: ['./competitions-list.page.scss'],
})
export class CompetitionsListPage implements OnInit {
  selectedSeason = new FormControl();
  seasons = [];

  competitions$ = this.competitionService.listCompetitions();

  constructor(private competitionService: CompetitionsService) {}

  ngOnInit() {
    this.initSeasons();
  }

  initSeasons() {
    const currentYear = new Date().getFullYear();
    this.selectedSeason.setValue(currentYear);
    this.seasons = new Array(20).fill(0).map((_, i) => currentYear - i);
  }
}
