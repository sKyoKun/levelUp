import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings, SettingsInterface } from '../models/settings.model';
import { map, subscribeOn } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settingsUri = `${environment.api}settings`;

  private _settings : Settings = null;

  constructor(private httpClient : HttpClient) {

  }

  public retrieveSettings() : Observable<SettingsInterface> {
    return this.httpClient.get<SettingsInterface>(this.settingsUri).pipe(
      map( (response : Settings) => {
        this._settings = response;

        return this._settings;
      }));
  }

  get settings () {
    return this._settings;
  }
}
