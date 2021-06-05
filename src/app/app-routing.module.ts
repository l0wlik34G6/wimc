import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DomainListComponent} from './domain-list/domain-list.component';
import {CustomerListComponent} from './customer-list/customer-list.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'domains', component: DomainListComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
