import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CustomersRoutingModule } from './customers-routing.module';

import { CardCustomerComponent } from './components/card-customer/card-customer.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { SearchComponent } from './pages/search/search.component';
import { CustomerImagePipe } from './pipes/customer-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PayPageComponent } from './pages/pay-page/pay-page.component';


@NgModule({
  declarations: [
    CardCustomerComponent,
    CustomerPageComponent,
    LayoutPageComponent,
    ShoppingCartPageComponent,
    SearchComponent,
    CustomerImagePipe,
    PayPageComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
