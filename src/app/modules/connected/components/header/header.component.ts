import { Component, OnInit } from '@angular/core';
import { DefaultUrlSerializer } from '@angular/router';
import { Settings } from 'src/app/models/settings.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user : User;
  private _settings : Settings;
  public currentPercentile = 0;

  constructor(private userService : UsersService, private settingService : SettingsService) {
    this.retrieveUser(1);
  }

  public retrieveUser(userId: number): User {
    if (!this.user) {
      this.userService.getUser(userId).subscribe(res => {
        this.user = res;
      });
    }

    return this.user;
  }

  public getProgression(currentXP : number, level : number) {
    const levelOneXP = this._settings.levelOneBaseXp;
    let maxLevelXP = level * this._settings.levelUpRatio * levelOneXP;

    console.log(currentXP/maxLevelXP);

    return currentXP/maxLevelXP;

  }

  ngOnInit(): void {
    this.settingService.retrieveSettings().subscribe((settings : Settings) => {
        this._settings = settings,
        this.calcLevel();
    });
  }

  private calcLevel() {
    let xpForNextLevel = this._settings.levelOneBaseXp;

    for (let i = 1; i <= +this.user.level; i++) {
      xpForNextLevel = xpForNextLevel + (xpForNextLevel * this._settings.levelUpRatio);
    }

    this.currentPercentile = Math.trunc((this.user.xp / xpForNextLevel) * 100);
  }

}
