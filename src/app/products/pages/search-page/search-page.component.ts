import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Products } from '../../interfaces/interface';
import { ProductsService } from '../../services/products.service';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  public products: Products[] = [];

  public product?: Products;

  public searchInput = new FormControl('');

  constructor ( private productsService: ProductsService,
                private router: Router ) {}

  searchProduct(): void {

    const value: string = this.searchInput.value || '';

    this.productsService.getSuggestions( value )
    .subscribe( product => this.products = product )

  }

  onSelectOption( event : MatAutocompleteActivatedEvent ): void {

    if( !event.option?.value ) {
      this.product = undefined;
      return;
    };

    this.router.navigateByUrl(`products/${ event.option.value.id }`)


  }

}
