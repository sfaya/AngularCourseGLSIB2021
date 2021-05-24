import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root',
})
export class CrudCategorieService {
  endPoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getCategories(): Observable<Categorie> {
    return this.httpClient
      .get<Categorie>(this.endPoint + '/categories')
      .pipe(retry(1), catchError(this.httpError));
  }

  getCategorie(id: any): Observable<Categorie> {
    return this.httpClient
      .get<Categorie>(this.endPoint + '/categories/' + id)
      .pipe(retry(1), catchError(this.httpError));
  }

  create(Categorie: any): Observable<Categorie> {
    return this.httpClient
      .post<Categorie>(
        this.endPoint + '/categories',
        JSON.stringify(Categorie),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  update(id: string, data: any): Observable<Categorie> {
    return this.httpClient
      .put<Categorie>(
        this.endPoint + '/categories/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  delete(id: any) {
    return this.httpClient
      .delete<Categorie>(this.endPoint + '/categories/' + id, this.httpHeader)
      .pipe(retry(1), catchError(this.httpError));
  }

  httpError(error: { error: { message: string }; status: any; message: any }) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
