import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompetitionsService {
  static readonly baseURL = 'http://api.football-data.org/v2/competitions/';

  constructor(private httpClient: HttpClient) {}

  listCompetitions() {
    return this.httpClient.get(CompetitionsService.baseURL);
  }

  listTeamsByCompetition(competitionID, season) {
    return this.httpClient.get<any>(
      `${CompetitionsService.baseURL + competitionID}/teams`,
      { params: { season } }
    );
  }
}
