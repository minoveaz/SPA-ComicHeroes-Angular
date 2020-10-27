import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpassword'
})
export class ShowpasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    return ( mostrar) ? '*'.repeat(value.length) : value;
  }

}
