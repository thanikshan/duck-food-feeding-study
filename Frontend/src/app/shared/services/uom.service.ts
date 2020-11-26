import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UOM } from '../models/uom';

@Injectable({
  providedIn: 'root',
})
export class UomService {
  private apiUrl = environment.apiUrl + '/uom';
  constructor(private http: HttpClient) {}

  getUom(): Observable<UOM[]> {
    return this.http.get<UOM[]>(this.apiUrl).pipe(catchError(this.handleError));
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
