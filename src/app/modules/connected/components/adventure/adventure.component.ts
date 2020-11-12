import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {

  }

  ngOnInit(): void {
  }

}
