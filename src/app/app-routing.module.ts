import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/compoments/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/compoments/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'details', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
