import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }

  getAppCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getPrductsByCategories(categorie: string) {
    return this.http.get(
      environment.baseApi + 'products/category/' + categorie
    );
  }

  getProductsById(id: number) {
    return this.http.get(environment.baseApi + 'products/' + id);
  }
}
