import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient) {}

  creatNewCart(model: any) {
    return this.http.post(environment.baseApi + 'carts', model);
  }
}
