import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  competitionID;
  teamID;
  teamData$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    const { competitionID, teamID } = this.route.snapshot.params;
    this.competitionID = competitionID;
    this.teamID = teamID;
    this.loadTeamDetails(teamID);
  }

  loadTeamDetails(teamID) {
    this.teamData$ = this.teamsService.details(teamID);
  }
}
