import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item_interface } from './item_interface';
import { request_interface } from './request_interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(this.baseurl + '/items/',
      { headers: this.httpHeaders });
  }

  getRequests(): Observable<any> {
    return this.http.get(this.baseurl + '/requests/',
      { headers: this.httpHeaders });
  }
  createRequest(x): Observable<any> {
    const body = { item: x.item, quantity: x.quantity, roll: x.roll };
    return this.http.post<request_interface>(this.baseurl + '/requests/', body,
      { headers: this.httpHeaders });
  }

  updateItem(item): Observable<any> {
    console.log("hello")
    const body = {  quantity: item.quantity, price: item.price };
    return this.http.put<any>(this.baseurl + '/items/' + item.id + '/', body,
      { headers: this.httpHeaders });
  }


  getCustomers(): Observable<any> {
    return this.http.get(this.baseurl + '/customers/',
      { headers: this.httpHeaders });
  }



  updateRequest(req): Observable<any> {
    const body = { item: req.item, quantity: req.quantity, roll: req.roll, is_sent: req.is_sent,is_approved: req.is_approved,is_denied: req.is_denied };
    return this.http.put<request_interface>(this.baseurl + '/requests/' + req.id + '/', body,
      { headers: this.httpHeaders });
  }

  deleteRequest(id): Observable<any> {
    return this.http.delete<request_interface>(this.baseurl + '/requests/' + id + '/',
      { headers: this.httpHeaders });
  }

}