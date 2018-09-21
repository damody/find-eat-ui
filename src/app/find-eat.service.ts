import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FindEatService {
  //private Host = 'http://localhost:8080/';
  private Host = 'https://www.find-eat-price.com/api/';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  public getFoods(keyword: string, fuzzy: boolean): Observable<string[]> {
    const url = this.Host + 'food/keyword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(url, keyword);
    return this.http.post<string[]>(url , {food_name: keyword, fuzzy: fuzzy}, httpOptions)
      .pipe(
        catchError(this.handleError('getFoods', []))
      );
  }
  public getRestaurants(keyword: string, fuzzy: boolean): Observable<string[]> {
    const url = this.Host + 'restaurant/keyword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(url, keyword);
    return this.http.post<string[]>(url , {name: keyword, fuzzy: fuzzy}, httpOptions)
      .pipe(
        catchError(this.handleError('getRestaurants', []))
      );
  }

}
