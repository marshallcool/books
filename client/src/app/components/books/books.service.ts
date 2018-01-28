import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from "../../../environments/environment";

import { Observable } from "rxjs/Observable";
import { map, catchError } from 'rxjs/operators';

const apiHost = environment.api;

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<any> {
    return this.http.get(`${apiHost}/book`)
      .pipe(
        map(books => books),
        catchError((error) => Observable.throw(error))
      )
  }
}
