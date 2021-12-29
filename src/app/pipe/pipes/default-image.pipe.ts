import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

defaultAvatar: string = "https://via.placeholder.com/150"

  transform(imageUrl: string): string {
    return imageUrl ? imageUrl : this.defaultAvatar;
  }

}
