import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FindEatService {
  private Host = 'http://localhost:8080/';
  //private Host = 'https://www.find-eat-price.com/api/';
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }
  public newFood(name: string, price: number): Observable<string[]> {
    const url = this.Host + 'food';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<string[]>(url , {menu_id: 1, food_name: name, price: Number(price)}, httpOptions)
      .pipe(
        catchError(this.handleError('newFood', []))
      );
  }
  public newRestaurant(author_email: string, lng: number, lat: number, name: string, phone: string, email: string,
      open_time: string, close_time: string, delivery: string): Observable<string[]> {
    const url = this.Host + 'restaurant';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<string[]>(url , {author_email: author_email, lng: Number(lng), lat: Number(lat), name: name,
      phone: phone, email: email, open_time: open_time, close_time: close_time, delivery: delivery}, httpOptions)
      .pipe(
        catchError(this.handleError('newRestaurant', []))
      );
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
  public searchRestaurants(keyword: string, fuzzy: boolean): Observable<string[]> {
    const url = this.Host + 'restaurant/search';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(url, keyword);
    return this.http.post<string[]>(url , {name: keyword, fuzzy: fuzzy}, httpOptions)
      .pipe(
        catchError(this.handleError('searchRestaurants', []))
      );
  }
}
