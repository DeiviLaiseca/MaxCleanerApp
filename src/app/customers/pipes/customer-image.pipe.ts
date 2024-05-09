import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/app/products/interfaces/interface';

@Pipe({
  name: 'customerImage'
})
export class CustomerImagePipe implements PipeTransform {

  transform( product: Products ): string {
    if( !product.id && !product.alt_img ){
      return 'assets/no-image.png'
    };

    if( product.alt_img ) return product.alt_img;

    return `assets/products/${ product.id }.jfif`;
  };

}
