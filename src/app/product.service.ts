import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Product} from './model/product';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://api.partage.local/products'

  public getProduct(): Observable<Product[]> {
return this.http.get<Product[]>(this.apiURL).pipe(
  tap(products => console.log(products.length)),
catchError(this.handleError));
}


  public getProductById(slug: string): Observable<Product | null> {
    return this.http.get<Product>(this.apiURL + '/' + slug)
      .pipe(
        tap(product => console.log(product.name)),
        catchError((error: HttpErrorResponse ) => {
          if (error.status === 404) {
            return of (null);
          } else {
            this.handleError(error);
          }
    })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  constructor(private http: HttpClient) { }
}
