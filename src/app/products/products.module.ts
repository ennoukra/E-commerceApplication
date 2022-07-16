import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './compoments/all-products/all-products.component';
import { ProductsDetailsComponent } from './compoments/products-details/products-details.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SelectComponent } from '../shared/components/select/select.component';
import { ProductComponent } from '../shared/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProductsModule {}
