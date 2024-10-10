import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrl = 'http://localhost:5000/matiere';

  constructor(private http : HttpClient ) { }
 
  
  // Fonction pour ajouter une matière avec un ID de formation dynamique
  addMatiere(formationId: string, matiereData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/ajouter-matiere/${formationId}`, matiereData);
  }
  
  getAllMatiereDeFormation(id: string) {
    const url = `http://127.0.0.1:5000/matiere/${id}`;
    return this.http.get(url).pipe(
      // Retry up to 3 times before failing (optional retry logic)
     
    );
  }
   

updateMatiere(formationId: string, matiereId: string, formData: FormData) {
  return this.http.put(`http://127.0.0.1:5000/matiere/${formationId}/${matiereId}`, formData);
}

     getMatiere(formationId: string, id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${formationId}/${id}`);
}
  deleteMatiere(formationId:any,_id: any) {
    let url = `http://localhost:5000/matiere/${formationId}/${_id}`;
    return this.http.delete(url, {  
       
    });
  }
 
}
