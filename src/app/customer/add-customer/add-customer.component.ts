import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../customer-service.service";
import {ReactiveFormsModule} from "@angular/forms";
import {ObjectUtil} from "../../ObjectUtil";
import {Router} from "@angular/router";




@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  customerForm: FormGroup
  @Input() formValue: Customer
  customers: Customer[]

  constructor( private formBuilder: FormBuilder,
               private customerService: CustomerServiceService,
               public router: Router,
              ) { }

  ngOnInit(): void {
    this.formMaker();
    if(!ObjectUtil.isEmpty(this.formValue)) {
      this.customer = this.formValue;
      this.formMaker();
    }
  }

  formMaker() {
    this.customerForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      phone: [undefined, Validators.required],
      email: [undefined, Validators.email],
      address: [undefined]
    })
  }
  onSubmit() {
    this.customer.name = this.customerForm.get('name')?.value;
    this.customer.phone = this.customerForm.get('phone')?.value;
    this.customer.email = this.customerForm.get('email')?.value;
    this.customer.address = this.customerForm.get('address')?.value;
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      console.log(response);
      this.customers = response;
    })
  }

  saveCustomer() {
    if(this.customerForm.invalid){
      alert('invalid');
    } else {
      this.customerService.addCustomer(this.customerForm.value).subscribe((response) => {
        console.log('customes save', response);
        this.getCustomers();
        this.router.navigate(['customer']);

      })
    }

  }



}
