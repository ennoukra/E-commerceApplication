import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        alert('some thing wrong');
        this.loading = false;
      }
    );
  }

  getCategories() {
    this.service.getAppCategories().subscribe(
      (res: any) => {
        this.categories = res;
        console.log(res);
      },
      (error) => console.log(error.message)
    );
  }

  filterCategory(even: any) {
    let value = even.target.value;
    this.loading = true;
    // here if the value equal all than we need to get all the product
    // other ways we need to get products by categorie
    value == 'all'
      ? this.getProducts()
      : this.service.getPrductsByCategories(value).subscribe(
          (res: any) => {
            this.products = res;
            this.loading = false;
          },
          (error) => {
            console.log(error.message);
            this.loading = false;
          }
        );
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) =>
          item.item.id == event.item.id && item.quantity == event.quantity
      );
      if (exist) {
        alert('This product already in your Cart!');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
