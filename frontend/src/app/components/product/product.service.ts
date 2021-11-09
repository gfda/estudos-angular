import { Injectable } from '@angular/core';
import { MatSnackBar }from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GlobalConstants } from 'src/app/common/global-constants';
import { RoutesConstants } from 'src/app/common/routes-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string): void {
    this.snackBar.open(msg,'', {
      duration: GlobalConstants.MSG_DURATION,
      horizontalPosition: GlobalConstants.POSITION_RIGHT,
      verticalPosition: GlobalConstants.POSITION_TOP
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(RoutesConstants.BACKEND_PRODUCTS_URL, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(RoutesConstants.BACKEND_PRODUCTS_URL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Product> {
    const url = `${RoutesConstants.BACKEND_PRODUCTS_URL}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  update(product: Product): Observable<Product> {
    const url = `${RoutesConstants.BACKEND_PRODUCTS_URL}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  delete(id: number): Observable<Product> {
    const url = `${RoutesConstants.BACKEND_PRODUCTS_URL}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage(GlobalConstants.ERROR_MSG);
    return EMPTY;
  }
}
