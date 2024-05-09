import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Products } from 'src/app/products/interfaces/interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public baseUrl: string = environments.baseUrl;

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${ this.baseUrl }/products`)
  }

  getProductsById( id: string ): Observable<Products | undefined > {
    return this.http.get<Products>(`${ this.baseUrl }/products/${ id }`)
    .pipe(
      catchError( error => of(undefined))
    )
  }

  getSuggestions( query: string ): Observable<Products[]> {
    return this.http.get<Products[]>(`${ this.baseUrl }/products?q=${ query }&_limit=3`)
  }
}
