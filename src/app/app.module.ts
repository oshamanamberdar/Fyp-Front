import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {LayoutModule} from "./layout/layout.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {
  NbThemeModule,
  NbLayoutModule,
  NbAccordionModule,
  NbCardModule,
  NbToastrModule,
  NbButtonModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {MatButtonModule} from "@angular/material/button";
import { FabricComponent } from './fabric/fabric.component';
import {HttpClientModule} from "@angular/common/http";
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { AddFabricComponent } from './fabric/add-fabric/add-fabric.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerComponent,
    SupplierComponent,
    FabricComponent,
    AddCustomerComponent,
    AddFabricComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatCardModule,
    MatIconModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    MatButtonModule,
    NbAccordionModule,
    HttpClientModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NbButtonModule,
    NgbModule,
    MatDialogModule,


  ],

  providers: [NgbActiveModal,],
  bootstrap: [AppComponent]
})
export class AppModule { }
