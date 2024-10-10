import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@webcomponents/custom-elements';
import '@clr/icons';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import '@cds/core/icon/register.js';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';




@NgModule({
  declarations: [
    HeaderComponent,
    SidnavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,RouterModule,ClarityModule
  ]
  ,exports:[HeaderComponent,SidnavComponent]

})
export class CoreModule { }

