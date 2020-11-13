import { Item } from './item.model';

export interface DungeonInterface {
  id: number;
  name: string;
  requiredLevel : number;
  items : Item[];
  xp: number;
}

export class Dungeon implements DungeonInterface {
  public id = null;
  public name = '';
  public requiredLevel = 0
  public items = [] ;
  public xp = 0;

  public canAccess : boolean = false;

  constructor(data: DungeonInterface | {} = {}, userlevel : number =1) {
    Object.assign(this,data);
    this.canAccessDungeon(userlevel);
  }


  public canAccessDungeon(userLevel : number = 1) {
    this.canAccess = (userLevel >= this.requiredLevel);
  }
}
