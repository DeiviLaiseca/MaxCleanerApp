import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../interfaces/interface';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

   @Input() public products!: Products;

   ngOnInit(): void {
    if( !this.products ) throw Error('La propiedad del producto es requerida')
  }

}
