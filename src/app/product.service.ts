import { Injectable } from '@angular/core';
import { IProduct } from './product-list/Product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  productUrl:string="api/products/products.json"
  products: IProduct[]; 
 
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      tap(data=>console.log("Response data"+ JSON.stringify(data))),
       catchError(this.handleError) 
    )
    ;
  }
  private handleError(err:HttpErrorResponse){
    return throwError(err.message)
  }
}
