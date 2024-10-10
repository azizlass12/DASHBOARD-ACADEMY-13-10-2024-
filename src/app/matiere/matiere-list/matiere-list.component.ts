import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../matiere.service';
import { ActivatedRoute } from '@angular/router';

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
  deleteMatiere(formationId: any, _id: any, index: number) {
    this.matService.deleteMatiere(formationId, _id).subscribe(response => {
      console.log(response);
      // Remove the item from the array using the index
      this.matieres.splice(index, 1);
    }, error => {
      console.error('Error deleting matiere:', error);
      // Optionally, handle errors (e.g., show a message)
    });
  }
  
}
