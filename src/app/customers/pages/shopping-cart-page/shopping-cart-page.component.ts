import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/products/interfaces/interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css']
})
export class ShoppingCartPageComponent {

  public products!: Products;

  constructor (   private customerService: CustomerService,
                  private activateRoute: ActivatedRoute,
                  private router: Router ) {}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({_id}) => this.customerService.getProductsById( _id ))
    )
    .subscribe( product => {
      if( !product ) return this.router.navigate(['/customer/list']);

      this.products = product;
      return;
    })
  }

  goBackList(): void {
    this.router.navigateByUrl('customer/list')
  }

  goBackSearch():void {
    this.router.navigateByUrl('customer/search')
  }

}
