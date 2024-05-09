import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/interface';

@Pipe({
  name: 'productImage'
})
export class ProductImagePipe implements PipeTransform {

  transform( product: Products ): string {
    if( !product.id && !product.alt_img ){
      return 'assets/no-image.png'
    };

    if( product.alt_img ) return product.alt_img;

    return `assets/products/${ product.id }.jfif`;
  };

}
