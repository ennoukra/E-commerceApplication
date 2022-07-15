import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from '../products/compoments/all-products/all-products.component';

@NgModule({
  declarations: [HeaderComponent, AllProductsComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, AllProductsComponent],
})
export class SharedModule {}
