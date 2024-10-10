import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { DeleteFormationComponent } from './delete-formation/delete-formation.component';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { ClarityModule } from '@clr/angular';
import { EditFormationComponent } from './edit-formation/edit-formation.component';

@NgModule({
  declarations: [
    AddFormationComponent,
    DeleteFormationComponent,
    ListeFormationComponent,
    UpdateFormationComponent,
    EditFormationComponent,
      ],
  imports: [
    CommonModule,
    FormationRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule
      ]
})
export class FormationModule { }
