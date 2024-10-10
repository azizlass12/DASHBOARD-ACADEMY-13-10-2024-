import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereService } from '../matiere.service';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent implements OnInit {

  matiereData: any = {};
  registerForm: FormGroup;
  formationId: any;
  matiereId: any;
  selectedFile: File | null = null;

  constructor(
    private location: Location,
    private ds: MatiereService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // Initialize the form with empty controls
    this.registerForm = new FormGroup({
      name: new FormControl(''), // Initialize with empty string
      description: new FormControl(''), // Initialize with empty string
      image: new FormControl() // For image handling
    });

    // Get formationId and matiereId from route params
    this.route.params.subscribe(params => {
      this.formationId = params['formationId'];
      this.matiereId = params['idMat']; // Use this.idMat instead of 'idMat'
    
      // Fetching the existing data for the selected matière
      this.ds.getMatiere(this.formationId, this.matiereId).subscribe((response: any) => {
        this.matiereData = response;

        // Populating the form with the fetched data directly in the constructor
        this.registerForm = new FormGroup({
          name: new FormControl(this.matiereData ? this.matiereData.name : ''),
          description: new FormControl(this.matiereData ? this.matiereData.description : ''),
          image: new FormControl() // Image handling remains empty for now
        });
      });
    });
  }

  ngOnInit(): void {}

  // File selection handler
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Update Matière method
  updateMatiere() {
    const formData = new FormData();
    formData.append('name', this.registerForm.get('name')!.value);
    formData.append('description', this.registerForm.get('description')!.value);
    
    if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    console.log('Form Values:', this.registerForm.value);

    this.ds.updateMatiere(this.formationId, this.matiereId, formData).subscribe(
        (res: any) => {
            console.log('success', res);
                // Optionally, navigate away or reset the form
        },
        (err: any) => {
            console.error(err);
            // this.toast.error({ position: 'tl', summary: 'Erreur lors de la modification', duration: 5000 });
        }
    );
}

  // Go back to the previous page
  back(): void {
    this.location.back();
  }
}
