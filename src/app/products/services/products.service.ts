import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Products } from '../interfaces/interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})

export class ProductsService {

  public baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${ this.baseUrl }/products`)
  };

  getProductById( id: string ): Observable<Products | undefined>{
    return this.http.get<Products>(`${ this.baseUrl }/products/${ id }`)
    .pipe(
      catchError( error => of(undefined))
    );
  }

  getSuggestions( query: string ): Observable<Products[]> {
    return this.http.get<Products[]>(`${ this.baseUrl }/products?q=${ query }&_limit=3`)
  }

  addProduct( product: Products ): Observable<Products> {
    return this.http.post<Products>(`${ this.baseUrl }/products`, product)
  }

  updateProduct( product: Products ): Observable<Products> {

    if(!product._id) throw Error('Product ID is require');

    return this.http.patch<Products>(`${ this.baseUrl }/products/${ product._id }`, product)
  }

  deleteProduct( id: string ): Observable<boolean> {

    return this.http.delete(`${ this.baseUrl }/products/${ id }`)
    .pipe(
      catchError( err => of(false)),
      map( resp => true )
    );
  }

}
