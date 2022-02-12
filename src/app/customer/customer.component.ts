import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from "./customer-service.service";
import {Customer} from "./customer";
import {Router} from "@angular/router";
import {NgbActiveModal, NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] ;
  customerData:any
  constructor(private customerService: CustomerServiceService,
              public router: Router,
              public activeModal: NgbActiveModal,
              config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      console.log(response, 'customers');
      this.customers = response;
      this.customerData = response;
      console.log(this.customerData, 'customer data')
    })
  }

  routeToAddCustomer() {
    this.router.navigate(['add-Customer']);
  }

  deleteCustomer(id: number) {
    this.modalService.dismissAll()
    this.customerService.deleteCustomerById(id).subscribe((response)=>{
      this.getCustomers();

    })
  }
  open(content: any) {
    this.modalService.open(content);
  }




}
