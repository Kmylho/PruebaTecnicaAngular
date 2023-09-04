import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }
}
