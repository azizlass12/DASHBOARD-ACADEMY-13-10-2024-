import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatiereService } from '../matiere.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {
  matiereForm: FormGroup;
  selectedFile: File | null = null;
  id: any;
  constructor(private fb: FormBuilder,
    private matiereService: MatiereService,
    private route: ActivatedRoute) { 
      this.id = this.route.snapshot.paramMap.get('id') ;
      console.log(this.id)
      this.matiereForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        category: ['', Validators.required],
        instructor: ['', Validators.required],
        duration: ['', Validators.required],
        language: ['', Validators.required],
        price: ['', Validators.required],
        downloadLink: ['', Validators.required],
        level: ['', Validators.required],
        rating: ['', Validators.required],
        enrollments: ['', Validators.required],
        image: [null, Validators.required]
      });
    }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.matiereForm.patchValue({
        image: this.selectedFile
      });
      // Marquer le contrôle comme "touched" pour déclencher la validation
      this.matiereForm.get('image')?.markAsTouched();
    }
  }


  onSubmit(): void {
      if (this.matiereForm.valid && this.selectedFile) {
          const formData = new FormData();
          formData.append('name', this.matiereForm.get('name')?.value);
          formData.append('description', this.matiereForm.get('description')?.value);
          formData.append('image', this.selectedFile);
          formData.append('category', this.matiereForm.get('category')?.value);
          formData.append('instructor', this.matiereForm.get('instructor')?.value);
          formData.append('duration', this.matiereForm.get('duration')?.value);
          formData.append('language', this.matiereForm.get('language')?.value);
          formData.append('price', this.matiereForm.get('price')?.value);
          formData.append('rating', this.matiereForm.get('rating')?.value);
          formData.append('enrollments', this.matiereForm.get('enrollments')?.value);
          formData.append('downloadLink', this.matiereForm.get('downloadLink')?.value);
          formData.append('level', this.matiereForm.get('level')?.value);
  
          // Log formationId for debugging
          console.log('Formation ID:', this.id); // Check if id is correct
  
          this.matiereService.addMatiere(this.id, formData).subscribe(
              response => {
                  console.log('Matiere ajoutée avec succès:', response);
                  // Show SweetAlert success
                  Swal.fire({
                      title: 'Success!',
                      text: 'Matiere ajoutée avec succès.',
                      icon: 'success',
                      confirmButtonText: 'OK'
                  });
                  
                  // Reset form and clear file
                  this.matiereForm.reset();
                  this.selectedFile = null;
              },
              error => {
                  console.error('Erreur lors de l\'ajout de la matiere:', error);
                  // Show SweetAlert error
                  Swal.fire({
                      title: 'Error!',
                      text: 'Erreur lors de l\'ajout de la matiere. Veuillez réessayer.',
                      icon: 'error',
                      confirmButtonText: 'OK'
                  });
              }
          );
      } else {
          this.matiereForm.markAllAsTouched();
      }
  }
  

}
