import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Products } from 'src/app/products/interfaces/interface';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public products: Products[] = [];

  public product?: Products;

  public searchInput = new FormControl('');

  constructor ( private customerService: CustomerService,
                private router: Router ) {}

  searchProduct(): void {

    const value: string = this.searchInput.value || '';

    this.customerService.getSuggestions( value )
    .subscribe( product => this.products = product )

  }

  onSelectOption( event : MatAutocompleteActivatedEvent ): void {

    if( !event.option?.value ) {
      this.product = undefined;
      return;
    };

    this.router.navigateByUrl(`customer/cart/${ event.option.value.id }`)

  }

}
