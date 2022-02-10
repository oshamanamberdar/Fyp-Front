import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "./users/list-users/list-users.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CustomerComponent} from "./customer/customer.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {FabricComponent} from "./fabric/fabric.component";

const routes: Routes = [
  {path:'', component: ListUsersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'fabric', component: FabricComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
