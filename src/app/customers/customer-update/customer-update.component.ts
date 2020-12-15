import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {
  MatSnackBar
} from '@angular/material/snack-bar';

import { Customer } from './../shared/customers.model';
import { CustomersService } from './../shared/customers.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  customer: Customer
  id: number
  customerUpdateForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customersService: CustomersService,
    private location: Location,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.getAll('id');

    this.customerUpdateForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [
          Validators.required,
          Validators.pattern("^[0-9]{1,3}$")
        ]
      ],
      city: ['', Validators.required]
    })

    this.getCustomer()
  }

  getCustomer(): void {
    this.customersService.getCustomer(this.id)
      .subscribe(
        res => {
          this.customer = res
          this.customerUpdateForm.patchValue(res)
        }
      )
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let data = this.customerUpdateForm.value;
    this.customersService.updateCustomer(this.id, data)
      .subscribe(() => {
        this._snackBar.open(`Cliente ${data.name} atualizado com sucesso!`, '', {
          duration: 5000,
          horizontalPosition: 'start',
          verticalPosition: 'bottom',
        });
        this.goBack()
      });
  }

  get name() { return this.customerUpdateForm.get('name'); }
  get age() { return this.customerUpdateForm.get('age'); }
  get city() { return this.customerUpdateForm.get('city'); }

}
