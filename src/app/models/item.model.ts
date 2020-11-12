export interface ItemInterface {
  id: number;
  bonus : string;
  value : number;
  price : number;
  updateLevel : number;
}

export class Item implements ItemInterface {
  public id : number;
  public bonus : string;
  public value = 0;
  public price = 0;
  public updateLevel = 0;

  constructor(data: ItemInterface | {} = {}) {
    Object.assign(this,data);
  }
}
