import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { DeleteFormationComponent } from './delete-formation/delete-formation.component';

const routes: Routes = [
  // {path:'',component:ListeFormationComponent},
  {path:'add-formation',component:AddFormationComponent},
  {path:'update-formation/:id',component:UpdateFormationComponent},
  {path:'delete-formation',component:DeleteFormationComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
