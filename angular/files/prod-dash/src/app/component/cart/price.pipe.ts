import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: false
})
export class PricePipe implements PipeTransform {

  transform(value: string| number): number {
    if (typeof value === 'number') {
      return value
    }
   return parseFloat(value.replace(/[^0-9.-]+/g, ''));
  }

}
