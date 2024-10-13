import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../matiere.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.css']
})
export class MatiereListComponent implements OnInit {
id:any
matieres: any;
  constructor(private matService : MatiereService, private route:ActivatedRoute) {
    
 
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); // Assuming 'id' is the parameter name
   this.matService.getAllMatiereDeFormation(this.id).subscribe((data:any)=>{
      this.matieres = data
      console.log(this.matieres)

    })


  }
  deleteMatiere(formationId: any, _id: any, index: number): void {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Proceed with the deletion if confirmed
            this.matService.deleteMatiere(formationId, _id).subscribe(response => {
                console.log(response);
                // Remove the item from the array using the index
                this.matieres.splice(index, 1);
                
                // Show SweetAlert success message
                Swal.fire(
                    'Deleted!',
                    'The matiere has been deleted.',
                    'success'
                );
            }, error => {
                console.error('Error deleting matiere:', error);
                // Optionally, show an error alert
                Swal.fire(
                    'Error!',
                    'There was a problem deleting the matiere. Please try again.',
                    'error'
                );
            });
        }
    });
}
  
}
