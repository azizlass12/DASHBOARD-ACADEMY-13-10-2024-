import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateurRoutingModule } from './formateur-routing.module';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { DeleteFormateurComponent } from './delete-formateur/delete-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { ListeFormateurComponent } from './liste-formateur/liste-formateur.component';


@NgModule({
  declarations: [
    AddFormateurComponent,
    DeleteFormateurComponent,
    UpdateFormateurComponent,
    ListeFormateurComponent
  ],
  imports: [
    CommonModule,
    FormateurRoutingModule
  ]
})
export class FormateurModule { }
