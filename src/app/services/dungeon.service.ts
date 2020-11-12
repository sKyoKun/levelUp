import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dungeon, DungeonInterface } from '../models/dungeon.model';
import { map, subscribeOn } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DungeonService {
  dungeonsUri = `${environment.api}donjons`;

  private _dungeons : Dungeon[] = null;

  constructor(private httpClient : HttpClient) {
  }

  public retrieveDungeons() : Observable<Dungeon[]> {
     return this.httpClient.get(this.dungeonsUri).pipe(map((response : Dungeon[]) => {
       return response;
     }));
  }

  get dungeons () {
    return this._dungeons;
  }
}
