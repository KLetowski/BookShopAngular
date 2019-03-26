import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../interfaces/order';
import { postOrder } from '../utils/apiUrls';
import { ResponseBody } from '../interfaces/response-body';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  submitOrder(order: Order): Observable<ResponseBody<Book[]>> {
    return this.http.post<ResponseBody<Book[]>>(postOrder, order);
  }
}
