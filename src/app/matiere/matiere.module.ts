import { NgModule } from '@angular/core';

import { MatiereRoutingModule } from './matiere-routing.module';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { CommonModule } from '@angular/common';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { MatiereByIdComponent } from './matiere-by-id/matiere-by-id.component';


@NgModule({
  declarations: [
  
    
  
    
  
  
  
    MatiereByIdComponent
  ],
  imports: [
    CommonModule,
    MatiereRoutingModule
  ]
})
export class MatiereModule { }
