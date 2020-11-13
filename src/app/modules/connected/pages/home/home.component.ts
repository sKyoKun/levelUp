import { Component, OnInit } from '@angular/core';
import { Dungeon } from 'src/app/models/dungeon.model';
import { UserStat } from 'src/app/models/user-stat.model';
import { DungeonService } from 'src/app/services/dungeon.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userStats : UserStat;
  public dungeons : Dungeon[] = [];
  public chosenDungeon: Dungeon;
  public dungeonInProgress : Dungeon = null;

  constructor(private userService : UsersService, private dungeonService : DungeonService) {
    this.userStats = userService.authenticatedUser;
    dungeonService.retrieveDungeons().subscribe(result => {
      this.dungeons = result;
    });
  }

  ngOnInit(): void {

  }

  dungeonChosen(dungeon : Dungeon) {
    this.chosenDungeon = dungeon;
  }

  inProgress(dungeon : Dungeon) {
    this.dungeonInProgress = dungeon;
  }

  reinitDungeon() {
    this.chosenDungeon = null;
    this.dungeonInProgress =null;
  }
}
