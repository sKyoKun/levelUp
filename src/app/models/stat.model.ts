export interface StatInterface {
  id: number;
  userId : number;
  atk : number;
  def : number;
  tauxCrit : number;
  degCtrit : number;
  pv : number;
}

export class Stat implements StatInterface {
  public id : number;
  public userId : number;
  public atk = 0;
  public def = 0;
  public tauxCrit = 0;
  public degCtrit = 0;
  public pv = 0;

  constructor(data: StatInterface | {} = {}) {
    Object.assign(this,data);
  }
}
