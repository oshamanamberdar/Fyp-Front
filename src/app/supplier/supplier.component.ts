import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Supplier} from "./supplier";
import {SupplierService} from "./supplier.service";
import {NgbActiveModal, NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  suppliers: Supplier[];


  constructor( public router: Router,
               private supplierService: SupplierService,
               public activeModal: NgbActiveModal,
               config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getSuppliers();
  }

  routeToAddSupplier() {
    this.router.navigate(['add-supplier']);
  }

  getSuppliers() {
    this.supplierService.getSupplier().subscribe((response)=>{
      console.log('supplier',response);
      this.suppliers = response;
    })
  }
  deleteSupplier(id: number) {
    this.modalService.dismissAll();
    this.supplierService.deleteSupplierById(id).subscribe((response)=>{
      this.getSuppliers();
    })
  }
  open(content: any) {
    this.modalService.open(content);
  }
}
