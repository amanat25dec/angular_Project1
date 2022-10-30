import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value:any,Gender:any) {
    if(Gender=='male'){
    return 'mr.'+value;
  }else{
  return 'miss.'+value
  }
}

}
