import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '../models/location';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = environment.apiUrl + '/location';
  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http
      .get<Location[]>(this.apiUrl)
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
