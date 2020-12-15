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

  customers: Customer[] = null
  customersRaw: Customer[] = []
  filter: string = ''
  
  pagination:any = {
    currentPage: 1,
    start: 0,
    end: 10,
  }

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.customersService.getCustomers()
      .subscribe(
        res => {
          this.customers    = res
          this.customersRaw = res
        }
      )
  }

  public openCustomer(customer: Customer): void {
    this.router.navigateByUrl(`/customer/${customer.id}`)
  }

  public filterCustomers(value: string): void {
    if (value && this.filter) {
      this.customers = this.customersService.filterCustomers(this.customers, this.filter)
    } else {
      this.customers = this.customersRaw
    }
  }

}
