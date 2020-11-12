import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forKey'
})
export class ForKeyPipe implements PipeTransform {

  transform(value: {} = {}, ...args: unknown[]): string[] {
    return Object.keys(value);
  }

}
