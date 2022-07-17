import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice: any = 0;
  success: boolean = false;

  constructor(private cartService: CartsService) {}

  ngOnInit(): void {
    this.getCartProducts();
    this.getCartTotal();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    console.log(this.cartProducts);
  }

  getCartTotal() {
    this.totalPrice = 0;
    for (let x in this.cartProducts) {
      this.totalPrice +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.getCartTotal();
    }
  }
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  clearCart() {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  addCart() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    this.cartService.creatNewCart(model).subscribe((res) => {
      this.success = true;
    });
    console.log(model);
  }
}
