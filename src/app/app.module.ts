import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClarityIcons, boltIcon, bugIcon, certificateIcon, cogIcon, homeIcon, sadFaceIcon, shieldIcon, userIcon } from '@cds/core/icon';
import { ClarityModule } from '@clr/angular'
import { AppRoutingModule } from './app-routing.module';
import { FormationModule } from './formation/formation.module';
import '@cds/core/icon/register.js';
import { CoreModule } from './core/core.module';
import '@webcomponents/custom-elements';
import '@clr/icons';
import { ClrIconModule } from '@clr/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MatiereListComponent } from './matiere/matiere-list/matiere-list.component';
import { AddMatiereComponent } from './matiere/add-matiere/add-matiere.component';
import { EditMatiereComponent } from './matiere/edit-matiere/edit-matiere.component';

ClarityIcons.addIcons(userIcon, homeIcon, cogIcon, boltIcon, bugIcon, shieldIcon, certificateIcon, sadFaceIcon)

@NgModule({
  declarations: [
   
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    MatiereListComponent,
    AddMatiereComponent,
    EditMatiereComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,FormationModule,AppRoutingModule,ClarityModule ,CoreModule ,ClrIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
