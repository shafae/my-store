import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product=new Product;
  cartProducts:Product[]=[];
  productAmount:any=1;
  list:Number[]=[1,2,3,4,5,6,7,8,9,10]

constructor(private service:ProductService,private cartService:CartServiceService) { }

  ngOnInit(): void {
  }

  selectAmount(amount:any){
    this.productAmount= amount
  }

  addToCart(product:Product):void{
    this.cartProducts=this.cartService.getCartProducts();

    const addedProduct=this.cartProducts.find((res) => res.id === product.id);
    if (addedProduct) {
      addedProduct.amount = this.productAmount;
      this.cartService.addToCart(this.cartProducts)
      alert( `${product.name} has been updated in your cart.`);

    }
    else {
      this.cartProducts.push(Object.assign(product, { amount: this.productAmount }));
      this.cartService.addToCart(this.cartProducts);
      alert( `${product.name} has been added to your cart.`);
    }
  }
}
