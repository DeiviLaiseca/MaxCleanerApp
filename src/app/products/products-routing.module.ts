import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-product', component: NewProductPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: NewProductPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: ProductPageComponent },
      { path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
