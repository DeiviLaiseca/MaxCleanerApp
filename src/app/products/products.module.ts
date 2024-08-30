import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';
import { ProductImagePipe } from './pipes/product-image.pipe';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { DialogoDeleteComponent } from './components/dialogo-delete/dialogo-delete.component';


@NgModule({
  declarations: [
    CardComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewProductPageComponent,
    ProductImagePipe,
    ProductPageComponent,
    SearchPageComponent,
    DialogoDeleteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
