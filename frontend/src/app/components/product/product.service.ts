import { Injectable } from '@angular/core';
import { MatSnackBar }from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_URL = "http://localhost:3001/products"
  private readonly ERROR_MSG = "An error has occurred!"
  private readonly MSG_DURATION = 3000
  private readonly POSITION_RIGHT = "right"
  private readonly POSITION_TOP = "top"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg,'', {
      duration: this.MSG_DURATION,
      horizontalPosition: this.POSITION_RIGHT,
      verticalPosition: this.POSITION_TOP
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.BASE_URL, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Product> {
    const url = `${this.BASE_URL}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  update(product: Product): Observable<Product> {
    const url = `${this.BASE_URL}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  delete(id: number): Observable<Product> {
    const url = `${this.BASE_URL}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage(this.ERROR_MSG);
    return EMPTY;
  }
}
