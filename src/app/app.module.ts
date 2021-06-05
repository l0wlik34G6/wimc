import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DomainListComponent} from './domain-list/domain-list.component';
import {NavigationComponent} from './navigation/navigation.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerListItemComponent} from './customer-list/customer-list-item/customer-list-item.component';
import {DomainDetailComponent} from './domain-list/domain-detail/domain-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DomainListComponent,
    NavigationComponent,
    CustomerListComponent,
    CustomerListItemComponent,
    DomainDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
