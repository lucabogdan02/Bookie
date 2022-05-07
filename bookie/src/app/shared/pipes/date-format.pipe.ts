import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date): string {
    let tzoffset = (new Date()).getTimezoneOffset() * 60000
    let localISOTime = (new Date(Date.now() - tzoffset)).toISOString().replace('Z', '').replace('T', ' ');
    return localISOTime
    // return null;
  }

}