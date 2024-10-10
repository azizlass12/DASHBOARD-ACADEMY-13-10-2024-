import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFormationComponent } from './formation/add-formation/add-formation.component';
import { ListeFormationComponent } from './formation/liste-formation/liste-formation.component';
import { MatiereListComponent } from './matiere/matiere-list/matiere-list.component';
import { AddMatiereComponent } from './matiere/add-matiere/add-matiere.component';
import { EditMatiereComponent } from './matiere/edit-matiere/edit-matiere.component';

const routes: Routes = [
  
  {path: '', component:DashboardComponent},
  {path: 'AddFormation', component:AddFormationComponent},
  {path: 'formationList', component:ListeFormationComponent},
  {path: 'AddMatiere/:id', component:AddMatiereComponent},
  {path: 'MatiereList/:id', component:MatiereListComponent},
  { path: 'matiere/edit/:formationId/:idMat', component: EditMatiereComponent },
  { path: 'formation/edit/:formationId', component: EditMatiereComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
