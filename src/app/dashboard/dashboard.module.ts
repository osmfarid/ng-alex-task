import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { DashboardRoutingModule } from "./dashboard.routing.module";
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { OrganizationCardComponent } from './components/organization-card/organization-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';
import { OrganizationDialogComponent } from "./components/organization-dialog/organization-dialog.component";
import { OrganizationService } from './services/organization.service';


@NgModule({
  imports: [
    CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatMenuModule,
	MatIconModule,
	MatButtonModule,
	MatDialogModule,
	DashboardRoutingModule,
  ],
  declarations: [
	OrganizationsComponent,
	OrganizationCardComponent,
	OrganizationDialogComponent

  ],
  providers: [
	OrganizationService
  ]
})
export class DashboardModule { }