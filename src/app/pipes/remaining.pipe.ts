import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(input: any , maxlength:any ) {
    return maxlength - input.length;
  }
}
