import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FoodFeedService {
  private apiUrl = 'http://localhost:3000/' + 'test';
  constructor(private http: HttpClient) {}

  addFoodFeed(data): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, data)
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
