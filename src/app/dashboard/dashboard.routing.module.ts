import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationsComponent } from "./pages/organizations/organizations.component";

const routes: Routes = [
  { path: '', redirectTo: 'organizations', pathMatch: 'full'},
  { path: 'organizations', component: OrganizationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
