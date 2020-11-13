import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, ItemInterface } from '../models/item.model';
import { map, subscribeOn } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsUri = `${environment.api}items`;

  public items : Observable<ItemInterface[]>;

  constructor(private httpClient : HttpClient) {
    this.items =  this.httpClient.get<ItemInterface[]>(this.itemsUri).pipe(map((response : ItemInterface[]) => {
      const items = response.map(item => {
        return new Item(item);
      })
      return items;
    }));
  }
}
