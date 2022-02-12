import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "./users/list-users/list-users.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CustomerComponent} from "./customer/customer.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {FabricComponent} from "./fabric/fabric.component";
import {AddCustomerComponent} from "./customer/add-customer/add-customer.component";
import {AddFabricComponent} from "./fabric/add-fabric/add-fabric.component";
import {AddSupplierComponent} from "./supplier/add-supplier/add-supplier.component";

const routes: Routes = [
  {path:'', component: ListUsersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'fabric', component: FabricComponent},
  {path: 'add-Customer', component: AddCustomerComponent},
  {path: 'add-fabric', component: AddFabricComponent},
  {path: 'add-supplier', component: AddSupplierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
