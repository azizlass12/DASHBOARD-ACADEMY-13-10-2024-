// src/app/services/formation.service.ts

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define the Formation interface
export interface Formation {
  name: string;
  description: string;
  image: File; // Image file
  matieres: string[]; // Array of Matiere IDs
}

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private apiUrl = 'http://127.0.0.1:5000/formation/ajouter-formation';

  constructor(private http: HttpClient) {}

  addFormation(formation: Formation): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('name', formation.name);
    formData.append('description', formation.description);
    formData.append('image', formation.image, formation.image.name);
    // Assuming matieres are sent as an array of strings
    formation.matieres.forEach((matiere, index) => {
      formData.append(`matieres[${index}]`, matiere);
    });

    return this.http
      .post<any>(this.apiUrl, formData)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Client-side Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Server-side Error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  getAllFormations(): Observable<Formation[]> {
    const url = `http://127.0.0.1:5000/formation/all`;
    return this.http.get<Formation[]>(url).pipe(
      // Retry up to 3 times before failing
      catchError(this.handleError)
    );
  }
  // updateFormation(id: string, formation: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/edit/${id}`, formation);
  // }
  deleteMatiere(formationId:any) {
    let url = `http://localhost:5000/formation/delete/${formationId}`;
    return this.http.delete(url, {  
       
    });
  }
  updateFormation(id: string, formation: Formation): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('name', formation.name);
    formData.append('description', formation.description);
    formData.append('image', formation.image, formation.image.name);
    formation.matieres.forEach((matiere, index) => {
      formData.append(`matieres[${index}]`, matiere);
    });

    return this.http.put(`${this.apiUrl}/edit/${id}`, formData).pipe(
      catchError(this.handleError)
    );
  }

// src/app/services/formation.service.ts
getFormationById(id: string): Observable<Formation> {
  return this.http.get<Formation>(`${this.apiUrl}/get/${id}`).pipe(
    catchError(this.handleError)
  );
}

  
}
