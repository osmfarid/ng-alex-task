import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from "./dashboard/dashboard.module";

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
