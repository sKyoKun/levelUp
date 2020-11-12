import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserInterface } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserStat } from '../models/user-stat.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUri = `${environment.api}users`;

  private _authenticatedUser : UserStat = null;

  constructor(private httpClient : HttpClient, private router: Router) {
    const userStorage = window.localStorage.getItem('authenticatedUser');
    if (userStorage) {
      this._authenticatedUser = new UserStat(JSON.parse(userStorage));
    }
  }

  set authenticatedUser(value) {
    window.localStorage.setItem('authenticatedUser', JSON.stringify(value));
    this._authenticatedUser = value;
  }

  get authenticatedUser(): UserStat {
    return this._authenticatedUser;
  }

  public getUser<UserInterface>(id: number): Observable<User> {
    return this.httpClient
    .get(`${this.userUri}/${id}`)
    .pipe( map( (response: UserInterface) => {
      return new UserStat(response);
    }));
  }

  public login (data : {password: string, email: string}): void {
    this.httpClient.get(`${this.userUri}/1?_embed=stats`).subscribe(( response : any) => {
      const user = {
        id : response.id,
        username : response.username,
        email : response.email,
        enable : response.enable,
        money : response.money,
        xp : response.xp,
        level: response.level,
        stat : response.stats[0]
      } as UserStat;
        this.authenticatedUser = user;
        this.router.navigate(['/app']);
    })
  }

  public register( data: {username: string, email: string, enable: boolean, money: number, level : number, xp:number}) {
    this.httpClient.post(`${this.userUri}`, data).subscribe( res => {
      this.router.navigate(['/app']);
   });
  }
}
