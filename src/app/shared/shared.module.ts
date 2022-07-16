import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from '../products/products.module';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  exports: [HeaderComponent, FormsModule],
})
export class SharedModule {}
