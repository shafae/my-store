import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private service:ProductService ,private cartService:CartServiceService) {
}


  list:Number[]=[1,2,3,4,5,6,7,8,9,10]
  products:Product[]=[];
  cartProducts:Product[]=[];
  product:Product=new Product;
  productAmount:any=1;
  productId=+this.activeRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
   this.getProductDetails(this.productId);

  }



getProductDetails(id){
  this.service.getProduct().subscribe(res =>{
    this.products = res;
    this.product =  this.products.filter(product => product.id === id)[0]
  })
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

