export interface UserInterface {
  id: number;
  username : string;
  email : string;
  enable: boolean;
  money : number;
  level : number;
  xp : number;
}

export class User implements UserInterface {
  public id = null;
  public username = '';
  public email = '';
  public enable: boolean;
  public money = 0;
  public level = 0;
  public xp = 0;

  /*constructor(data: UserInterface | null = null) {
      if (data) {
        this.id = (data.id) ? data.id : null;
      }
  }*/
  constructor(data: UserInterface | {} = {}) {
      Object.assign(this, data);
  }

  public getLevel(): string {
    return `${this.xp} XP`;
  }
}
