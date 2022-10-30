import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number): unknown {
    let res = '';
    switch (value % 10) {
      case 1:
        res = value + 'st';
        break;
      case 2:
        res = value + 'nd';
        break;
      case 3:
        res = value + 'rd';
        break;
      default:
        res = value + 'th';
    }

    return res;
  }
}
