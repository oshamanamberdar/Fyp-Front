import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
  routeToCustomer() {
    this.router.navigate(['customer']);
  }
  routeToSupplier() {
    this.router.navigate(['supplier']);
  }
  routeToFabric() {
    this.router.navigate(['fabric']);
  }




}
