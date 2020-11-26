import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private apiUrl = environment.apiUrl + '/food';
  constructor(private http: HttpClient) {}

  getFood(): Observable<Food[]> {
    return this.http
      .get<Food[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error has occured: $(err.error.message)';
    } else {
      errorMessage = 'Backend returned code: $(err.error.message)';
    }
    return throwError(errorMessage);
  }
}
