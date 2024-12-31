import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

   //for trainedin
  private baseurl = 'https://gdtc-training-api.azurewebsites.net/api/hospital/trainedin';

  private token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwIiwidGVuYW50X2VtYWlsIjoidmluZWV0LnNhbGlhbkBnb2RpZ2l0YWx0Yy5jb20iLCJjcmVhdGVkX29uIjoiMTIvMzAvMjAyNCA5OjI0OjI3IEFNIiwiZXhwIjoxNzM1ODk2MjY3fQ.JGLgZHuEmfn3245xygmWtXomUvvWRfnSLNgE2nHrah0';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json', 
    });
  }

  getallpost(): Observable<any> {
    return this.http.get(this.baseurl, { headers: this.getHeaders() });
  }
  getpost(id: any): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`, { headers: this.getHeaders() });
  }
  createpost(data: any): Observable<any> {
    return this.http.post(this.baseurl, data, { headers: this.getHeaders() });
  }
  updatepost(data: any): Observable<any> {
    return this.http.put(`${this.baseurl}`, data, { headers: this.getHeaders() });
  }
  deletepost(user: any): Observable<any> {
    return this.http.delete('this.baseurl', { headers: this.getHeaders() , body:user });
  }

 //for block
 private blockurl = 'https://gdtc-training-api.azurewebsites.net/api/hospital/block';

 private blocktoken = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwIiwidGVuYW50X2VtYWlsIjoidmluZWV0LnNhbGlhbkBnb2RpZ2l0YWx0Yy5jb20iLCJjcmVhdGVkX29uIjoiMTIvMzAvMjAyNCA5OjI0OjI3IEFNIiwiZXhwIjoxNzM1ODk2MjY3fQ.JGLgZHuEmfn3245xygmWtXomUvvWRfnSLNgE2nHrah0';

 private blockHeaders(): HttpHeaders {
   return new HttpHeaders({
     Authorization: `Bearer ${this.blocktoken}`,
     'Content-Type': 'application/json', 
   });
 }

 getallblock(): Observable<any> {
   return this.http.get(this.blockurl, { headers: this.blockHeaders() });
 }
 getblockpost(id: any): Observable<any> {
   return this.http.get(`${this.blockurl}/${id}`, { headers: this.blockHeaders() });
 }
 createblockpost(data: any): Observable<any> {
   return this.http.post(this.blockurl, data, { headers: this.blockHeaders() });
 }
 updateblockpost(data: any): Observable<any> {
  return this.http.put(`${this.blockurl}`, data, { headers: this.blockHeaders() });
 }
 deleteblockpost(user:any): Observable<any> {
   return this.http.delete(`${this.blockurl}`, { headers: this.blockHeaders() , body: user});
 }


 
 //for meds
 private medsurl = 'https://gdtc-training-api.azurewebsites.net/api/hospital/medication';

 private medstoken = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwIiwidGVuYW50X2VtYWlsIjoidmluZWV0LnNhbGlhbkBnb2RpZ2l0YWx0Yy5jb20iLCJjcmVhdGVkX29uIjoiMTIvMzAvMjAyNCA5OjI0OjI3IEFNIiwiZXhwIjoxNzM1ODk2MjY3fQ.JGLgZHuEmfn3245xygmWtXomUvvWRfnSLNgE2nHrah0';

 private medsHeaders(): HttpHeaders {
   return new HttpHeaders({
     Authorization: `Bearer ${this.medstoken}`,
     'Content-Type': 'application/json', 
   });
 }

 getallmeds(): Observable<any> {
   return this.http.get(this.medsurl, { headers: this.medsHeaders() });
 }
 getmedspost(id: any): Observable<any> {
   return this.http.get(`${this.medsurl}/${id}`, { headers: this.medsHeaders() });
 }
 createmedspost(data: any): Observable<any> {
   return this.http.post(this.medsurl, data, { headers: this.medsHeaders() });
 }
 updatemedspost(data: any): Observable<any> {
   return this.http.put(`${this.medsurl}`, data, { headers: this.medsHeaders() });
 }
 deletemedspost(user:any): Observable<any> {
   return this.http.delete(`${this.medsurl}`, { headers: this.medsHeaders() , body: user});
 }

}


