// src/app/components/add-formation/add-formation.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formation, FormationService } from '../formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  formationForm: FormGroup;
  selectedImage: File | null = null;
  matieres: string[] = []; // This should be populated based on your application's logic
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formationService: FormationService
  ) {
    this.formationForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required],
      matieres: [[]] // Assuming multiple selection
    });
  }

  ngOnInit(): void {
    // Initialize matieres if needed
    // Example: this.matieres = ['Matiere1', 'Matiere2'];
  }

  onImageSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
      this.formationForm.patchValue({
        image: this.selectedImage
      });
      this.formationForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.formationForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const formationData: Formation = {
      name: this.formationForm.value.name,
      description: this.formationForm.value.description,
      image: this.selectedImage as File,
      matieres: this.formationForm.value.matieres
    };

    this.isSubmitting = true;

    this.formationService.addFormation(formationData).subscribe({
      next: (response) => {
        console.log('Formation added successfully:', response);
        this.isSubmitting = false;
        this.formationForm.reset();
        this.selectedImage = null;
      },
      error: (error) => {
        console.error('Error adding formation:', error);
        this.isSubmitting = false;
      }
    });
  }

}
