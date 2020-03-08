import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Fruit } from './fruit';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://api.test/api/frutas';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  getFruits(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(apiUrl)
      .pipe(
        tap( fruit => console.log('fetched fruits')),
        catchError(this.handleError('getFruits', []))
      );
  }

  getFruit(id: number): Observable<Fruit> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Fruit>(url).pipe(
      tap(_ => console.log(`fetched fruit id=${id}`)),
      catchError(this.handleError<Fruit>(`getFruit id=${id}`))
    );
  }

  addFruit(fruit): Observable<Fruit> {
    return this.http.post<Fruit>(apiUrl, fruit, httpOptions).pipe(
      tap((fruit: Fruit) => console.log(`added fruit w/ id=${fruit.id}`)),
      catchError(this.handleError<Fruit>('addFruit'))
    );
  }

  updateFruit(id, fruit): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, fruit, httpOptions).pipe(
      tap(_ => console.log(`updated fruit id=${id}`)),
      catchError(this.handleError<any>('updateFruit'))
    );
  }

  deleteFruit(id): Observable<Fruit> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Fruit>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted fruit id=${id}`)),
      catchError(this.handleError<Fruit>('deleteFruit'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
