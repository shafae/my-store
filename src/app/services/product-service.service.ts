import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
products:Product[]=[]

  getProduct(): Observable<[]>{
      return this.http.get<[]>('/assets/data.json');
  }


}
