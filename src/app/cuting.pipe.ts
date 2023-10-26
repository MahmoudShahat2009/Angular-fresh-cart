import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuting'
})
export class CutingPipe implements PipeTransform {

  transform(text:string): string {
    return text.split(' ').slice(0,3).join(' ');
  }

}
