import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  static readonly baseURL = 'http://api.football-data.org/v2/teams/';

  constructor(private httpClient: HttpClient) {}

  details(teamID) {
    return this.httpClient.get(`${TeamsService.baseURL + teamID}`);
  }
}
