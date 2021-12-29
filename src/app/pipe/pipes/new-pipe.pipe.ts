import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(value: string) {
    console.log(value);
    if (value === "Hello") {
      let value = "Hello"
    } else {
      let value = ""
    }
    return value;
  }

}
