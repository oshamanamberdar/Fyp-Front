import {Component, Input, OnInit} from '@angular/core';
import {Supplier} from "../supplier";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../customer/customer-service.service";
import {Router} from "@angular/router";
import {SupplierService} from "../supplier.service";
import {ObjectUtil} from "../../ObjectUtil";

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();
  supplierForm: FormGroup;
  @Input() formValue: Supplier
  suppliers: Supplier[]

  constructor(private formBuilder: FormBuilder,
              private supplierService: SupplierService,
              public router: Router,) { }

  ngOnInit(): void {
    this.formMaker();
    if(!ObjectUtil.isEmpty(this.formValue)) {
      this.supplier = this.formValue;
      this.formMaker();
    }
  }

  formMaker() {
    this.supplierForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      phone: [undefined, Validators.required, Validators.max(10), Validators.min(10)],
      address: [undefined, Validators.email],
    })

  }

  onSubmit() {
    this.supplier.name = this.supplierForm.get('name')?.value;
    this.supplier.phone = this.supplierForm.get('phone')?.value;
    this.supplier.address = this.supplierForm.get('address')?.value;
  }

  getSupplier() {
    this.supplierService.getSupplier().subscribe((response)=>{
      console.log('supplier', response);
      this.suppliers = response;
    })
  }

  saveSupplier(){
    if(this.supplierForm.invalid){
      alert('Please check validation')
    }else {
      this.supplierService.addSupplier(this.supplierForm.value).subscribe((response)=>{
        console.log('saved supplier', response);
        this.getSupplier();
        this.router.navigate(['supplier'])
      })
    }
  }







}
