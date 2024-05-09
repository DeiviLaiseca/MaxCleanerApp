import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Products } from 'src/app/products/interfaces/interface';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.css'],
})
export class PayPageComponent {

  public products!: Products;

  constructor (   private customerService: CustomerService,
                  private activateRoute: ActivatedRoute,
                  private router: Router ) {}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({id}) => this.customerService.getProductsById( id ))
    )
    .subscribe( product => {

      if( !product ) return this.router.navigate(['/customer/list']);

      this.products = product;
      console.log(product);
      return;
    })
  }

}
