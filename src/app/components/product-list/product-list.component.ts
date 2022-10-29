import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service:ProductService) { }
  products:Product[]=[]
  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this.service.getProduct().subscribe(res=>
      this.products=res)
  }

}
