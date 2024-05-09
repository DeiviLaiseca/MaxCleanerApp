import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Products } from 'src/app/products/interfaces/interface';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  public products: Products[] = [];

  constructor( private customerService: CustomerService ) {}

  ngOnInit(): void {
    this.customerService.getProducts()
    .subscribe( products => this.products = products );
  }

}
