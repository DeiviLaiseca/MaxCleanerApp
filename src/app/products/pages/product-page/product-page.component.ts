import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Products } from '../../interfaces/interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public products!: Products;

  constructor (   private productsService: ProductsService,
                  private activateRoute: ActivatedRoute,
                  private router: Router ) {}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({id}) => this.productsService.getProductById( id ))
    )
    .subscribe( product => {
      if( !product ) return this.router.navigate(['/products/list']);

      this.products = product;
      return;
    })
  }

  goBackList(): void {
    this.router.navigateByUrl('products/list')
  }

  goBackSearch():void {
    this.router.navigateByUrl('products/search')
  }

}
