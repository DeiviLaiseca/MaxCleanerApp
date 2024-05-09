import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public products: Products[] = [];

  constructor ( private productsService: ProductsService ) {}

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe( products => this.products = products );
  }

}
