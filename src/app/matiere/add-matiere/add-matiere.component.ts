import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatiereService } from '../matiere.service';

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

        // Log formationId for debugging
        console.log('Formation ID:', this.id); // Check if id is correct

        this.matiereService.addMatiere(this.id, formData).subscribe(
            response => {
                console.log('Matiere ajoutée avec succès:', response);
                this.matiereForm.reset();
                this.selectedFile = null;
            },
            error => {
                console.error('Erreur lors de l\'ajout de la matiere:', error);
            }
        );
    } else {
        this.matiereForm.markAllAsTouched();
    }
}

}
