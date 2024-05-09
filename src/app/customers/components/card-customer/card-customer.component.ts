import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/products/interfaces/interface';

@Component({
  selector: 'card-customer',
  templateUrl: './card-customer.component.html',
  styleUrls: ['./card-customer.component.css']
})
export class CardCustomerComponent {

  @Input() public products!: Products;

  constructor ( private router: Router ) {}

   ngOnInit(): void {
    if( !this.products ) throw Error('La propiedad del producto es requerida')
  }

  goToCart(): void {
    this.router.navigateByUrl(`customer/cart/${ this.products.id }`)
  }

}
