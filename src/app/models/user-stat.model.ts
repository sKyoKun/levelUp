import { Stat } from './stat.model';
import { User } from './user.model';

export class UserStat extends User {

  stat : Stat = new Stat();

  constructor(data : UserStat | {} = {}) {
    super();
    Object.assign(this, data);
  }
}
