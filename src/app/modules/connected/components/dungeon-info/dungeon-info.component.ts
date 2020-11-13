import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Dungeon } from 'src/app/models/dungeon.model';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/items.service';

@Component({
  selector: 'app-dungeon-info',
  templateUrl: './dungeon-info.component.html',
  styleUrls: ['./dungeon-info.component.scss']
})
export class DungeonInfoComponent implements OnInit {

  @Input() dungeon : Dungeon;
  @Output() dungeonLaunched = new EventEmitter<Dungeon>();

  public items;
  public isLaunched = false;

  constructor(itemService : ItemService) {
     itemService.items.subscribe((items : Item[]) => {
      this.items = items;
  });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes : SimpleChanges) {
      this.isLaunched = false;
  }

  launchDungeon() {
    this.dungeonLaunched.emit(this.dungeon);
    this.isLaunched = true;
  }

}
