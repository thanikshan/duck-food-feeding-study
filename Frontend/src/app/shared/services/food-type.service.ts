import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FoodType } from '../models/foodType';
@Injectable({
  providedIn: 'root',
})
export class FoodTypeService {
  private apiUrl = environment.apiUrl + '/foodType';
  constructor(private http: HttpClient) {}

  getFoodTypes(): Observable<FoodType[]> {
    return this.http
      .get<FoodType[]>(this.apiUrl)
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
