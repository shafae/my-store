import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  orderPrice:number;
  constructor(private service:CartServiceService,  private router: Router) { }

  ngOnInit(): void {
    this.showCartProducts();
    this.calculateOrderPrice();
  }

showCartProducts(){
this.cartProducts=this.service.getCartProducts()
}



  amountChange(productAmount: string, product: Product) {
    const item = this.cartProducts.indexOf(product);
    if(+productAmount===0){
      this.cartProducts.splice(item,1);
      this.service.addToCart(this.cartProducts);
      this.calculateOrderPrice();

    }else{
    this.cartProducts[item] = product;
    this.cartProducts[item].amount = +productAmount;
    this.service.addToCart(this.cartProducts);
    this.calculateOrderPrice();
    }
  }


  calculateOrderPrice() {
    this.orderPrice = this.cartProducts.reduce((recentValue, product) => {
      this.orderPrice = +(recentValue + product.price * +product.amount);
      return this.orderPrice;
    }, 0);
  }

  submit(info:string){
    localStorage.clear();
    this.router.navigate([`confirmation/${info}/${this.orderPrice}`]);
  }


}
