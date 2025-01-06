import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  //product api
  private baseUrl = 'https://dummyjson.com/products';

  //zipcode api

  private pincodeurl = "https://api.postalpincode.in/pincode";

  //currency api
  private apiKey = 'fe2af80ad80013dce9b095d6';
  private currecyUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest`;

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

  //currency
  getExchangeRate(currency: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${currency}`);
  }

  //getpincode
  getpincode(pincode:string):Observable<any>{
    return this.http.get(`${this.pincodeurl}/${pincode}`)
  }

  //getitemcount
  getitemcount(): Observable<any>{
    const cart = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const itemcount = cart.items.length;
    return itemcount
  }
  
}



