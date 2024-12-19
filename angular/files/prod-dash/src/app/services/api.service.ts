import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private baseUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  //all products
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=0`);
  }

  //products by id
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  //update
  putProductById(id: number,productData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`,productData);
  }

  //create 
  newProduct(productData:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`,productData);
  }

  //delete 
  delProduct(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //'https://dummyjson.com/products/search?q=phone'
  
  //search
  searchProduct(search:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${search}`);
  }

  //'https://dummyjson.com/products/category/smartphones'

  //filter
  filterProduct(category:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }

}



