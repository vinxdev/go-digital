import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: false
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
