import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

import { catchError, map } from 'rxjs/operators';
import _sortBy from 'lodash/sortBy';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-teams-by-competition-list',
  templateUrl: './teams-by-competition-list.page.html',
  styleUrls: ['./teams-by-competition-list.page.scss'],
})
export class TeamsByCompetitionListPage implements OnInit {
  competitionID: number;
  teamsList$ = null;
  error = null;

  selectedSeason = new FormControl();
  seasons = [];

  constructor(
    private route: ActivatedRoute,
    private competitionsService: CompetitionsService
  ) {}

  ngOnInit() {
    this.initSeasons();
    this.loadTeams(this.selectedSeason.value);
    this.bindInputEvents();
  }

  loadTeams(season) {
    const { competitionID } = this.route.snapshot.params;
    this.competitionID = Number(competitionID);

    this.teamsList$ = this.competitionsService
      .listTeamsByCompetition(competitionID, season)
      .pipe(
        map((teamsResponse) => {
          teamsResponse.teams = _sortBy(teamsResponse.teams, 'name');
          return teamsResponse;
        }),
        catchError(({ error }: HttpErrorResponse) => {
          if (error.constructor.name === 'ProgressEvent') {
            this.error = {
              errorCode: 429,
              message: HttpStatusCode.TooManyRequests,
            };
          } else {
            this.error = error;
          }
          return [];
        })
      );
  }

  initSeasons() {
    const currentYear = new Date().getFullYear();
    this.selectedSeason.setValue(currentYear);
    this.seasons = new Array(20).fill(0).map((_, i) => currentYear - i);
  }

  bindInputEvents() {
    this.selectedSeason.valueChanges.subscribe((season) => {
      this.loadTeams(season);
    });
  }
}
