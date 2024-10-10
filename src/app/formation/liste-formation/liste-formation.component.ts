import { Component, OnInit } from '@angular/core';


import { FormationService } from '../formation.service';

@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})



export class  ListeFormationComponent implements OnInit {
  formations: any[] = [];

  constructor(private fs:FormationService) {}

  ngOnInit(): void {
    
this.fs.getAllFormations().subscribe ((data:any)=> {
  this.formations=data
  console.log('this is my data ',data)
})
  }
  deleteMatiere(formationId: any, index: number) {
    this.fs.deleteMatiere(formationId).subscribe(response => {
      console.log(response);
      // Remove the item from the array using the index
      this.formations.splice(index, 1);
    }, error => {
      console.error('Error deleting matiere:', error);
      // Optionally, handle errors (e.g., show a message)
    });
  }
}
