import { Component, Input, OnInit } from '@angular/core';
import { UserStat } from 'src/app/models/user-stat.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() public userStat : UserStat;

  constructor() { }

  ngOnInit(): void {
  }

}
