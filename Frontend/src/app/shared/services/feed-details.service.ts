import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FeedDetails } from '../models/feedDetails';

@Injectable({
  providedIn: 'root',
})
export class FeedDetailsService {
  private apiUrl = environment.apiUrl + '/feedDetails';
  constructor(private http: HttpClient) {}

  getFeedDetails(): Observable<FeedDetails[]> {
    return this.http
      .get<FeedDetails[]>(this.apiUrl)
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
