import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {

  // value : {id : number} => ne récupère que la clé ID de mon objet
  transform(value: {id : number}[], ...args: unknown[]): unknown {
    let selectedItems = args[0] as number[];

    return value.filter(item => selectedItems.includes(item.id));
  }
}
