import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { Dungeon } from 'src/app/models/dungeon.model';
import { UserStat } from 'src/app/models/user-stat.model';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent implements OnInit {

  @Input() public dungeons : Dungeon[];
  @Input() public userStat : UserStat;

  @Input() public dungeonInProgress : Dungeon;

  @Output() eventClick = new EventEmitter<Dungeon>();
  @Output() reintialized = new EventEmitter()
  @Output() dungeonTerminatedEvent = new EventEmitter();

  baseTimeLeft = 5;

  public chosenDungeon : Dungeon = null;
  public timeLeft: number = this.baseTimeLeft;
  public dungeonTerminated: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes : SimpleChanges) {
    if (this.dungeonInProgress) {
      this.startCountdown(this.timeLeft);
    }
  }

  public selectDungeon(dungeonId : number) {
    let dungeon = this.dungeons.find(o => o.id === dungeonId);

    if (dungeon.requiredLevel > this.userStat.level) {
      return;
    }

    this.chosenDungeon = dungeon;
    this.eventClick.emit(dungeon);
  }


  public startCountdown(seconds : number) {

    const interval = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft < 0 ) {
        this.timeLeft = 0;
        clearInterval(interval);
        this.dungeonTerminated = true;
      }
    }, 1000);

    this.userStat.xp += this.dungeonInProgress.xp;
  }

  public reinitDungeon() {
    this.chosenDungeon = null;
    this.dungeonInProgress = null;
    this.dungeonTerminated = false;
    this.timeLeft = this.baseTimeLeft;
    this.reintialized.emit();
  }
}
