import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {

  transform(value: string, character:string): string {
    return value.replace(character,' ');
  }

}
