import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  getCartProducts() {
    const getProducts = localStorage.getItem('products');
    return getProducts ? JSON.parse(getProducts) : [];
  }

  addToCart(product:Product[]):void{
    localStorage.setItem('products', JSON.stringify(product));
  }
}
