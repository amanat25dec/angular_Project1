import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees:any,searchtext:any){
    if(!employees)return null;
    if(!searchtext)return employees;

    searchtext = searchtext.toLowerCase();

    return employees.filter(function(item:any){
        return JSON.stringify(item).toLowerCase().includes(searchtext);
    });
  }

}
