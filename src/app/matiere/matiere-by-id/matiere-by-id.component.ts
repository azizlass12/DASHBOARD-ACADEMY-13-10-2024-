import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../matiere.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matiere-by-id',
  templateUrl: './matiere-by-id.component.html',
  styleUrls: ['./matiere-by-id.component.css']
})
export class MatiereByIdComponent implements OnInit {
  formationId: any
  matiereId: any
  matiere: any;

  constructor(private matiereService:MatiereService,private route:ActivatedRoute) {
    this.formationId = this.route.snapshot.paramMap.get('formationId');
    this.matiereId = this.route.snapshot.paramMap.get('matiereId');
   }

  ngOnInit(): void {
this.matiereService.getMatiere(this.formationId,this.matiereId).subscribe((data)=>{
console.log(data)
this.matiere = data;

})
  }
  getStars(rating: number): number[] {
    return [1, 2, 3, 4, 5];
  }
}
