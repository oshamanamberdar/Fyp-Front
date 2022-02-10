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
import {NbThemeModule, NbLayoutModule, NbAccordionModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {MatButtonModule} from "@angular/material/button";
import { FabricComponent } from './fabric/fabric.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerComponent,
    SupplierComponent,
    FabricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatCardModule,
    MatIconModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    MatButtonModule,
    NbAccordionModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
