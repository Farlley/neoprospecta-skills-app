import { Customer } from './../shared/customers.model';
import { CustomersService } from './../shared/customers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = []

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(res => {
      this.customers = res
    })
  }

  public openCustomer(customer: Customer) {
    this.router.navigateByUrl(`/customer/${customer.id}`)
  }

}
