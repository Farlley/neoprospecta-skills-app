import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {

  transform(data: any[], callback: (item: any) => boolean): any {
    if (!data || !callback) {
      return data;
    }
    return data.filter(item => callback(item));
  }

}
