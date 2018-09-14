import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FindEatService {
  private Host: string = 'http://localhost:8080/';
  private Url: string = 'food/keyword';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  public getFoods(keyword: string): Observable<string[]> {
    const url = this.Host + this.Url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(url, keyword);
    return this.http.post<string[]>(this.Host + this.Url, {food_name: keyword}, httpOptions)
      .pipe(
        catchError(this.handleError('getFoods', []))
      );
  }

}
