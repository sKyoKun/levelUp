export interface SettingsInterface {
  levelUpRatio: number;
  donjonItemWinRate : number;
  levelOneBaseXp : number;
}

export class Settings implements SettingsInterface {
  public levelUpRatio : number;
  public donjonItemWinRate : number;
  public levelOneBaseXp : number;

  constructor(data: SettingsInterface | {} = {}) {
    Object.assign(this,data);
  }
}
