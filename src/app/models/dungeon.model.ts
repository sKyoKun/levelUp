import { Item } from './item.model';

export interface DungeonInterface {
  name: string;
  requiredLevel : number;
  items : Item[];
  xp: number;
}

export class Dungeon implements DungeonInterface {
  public name = '';
  public requiredLevel = 0
  public items = [] ;
  public xp = 0;

  constructor(data: DungeonInterface | {} = {}) {
    Object.assign(this,data);
  }
}
