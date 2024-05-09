import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { SearchComponent } from './pages/search/search.component';
import { PayPageComponent } from './pages/pay-page/pay-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      { path: 'list', component: CustomerPageComponent },
      { path: 'cart/:id', component: ShoppingCartPageComponent },
      { path: 'search', component: SearchComponent },
      { path: 'pay/:id', component: PayPageComponent },
      { path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
