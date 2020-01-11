import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: any, ifEmpty: any): any {
    if (value == null || value == "R$ 0,00" || value == "" || value == 0) {
      if (ifEmpty) {
        return ifEmpty;
      }
      return "---";
    }


    return value;
  }

}
