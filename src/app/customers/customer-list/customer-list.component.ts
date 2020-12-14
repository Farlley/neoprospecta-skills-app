import { Customer } from './../shared/customers.model';
import { CustomersService } from './../shared/customers.service';
import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = []
  limit: number = 10
  pagination: any = this.setPagination(this.customers)

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.loadCustomers()
  }

  public loadCustomers(page?: number) {
    this.customersService.getCustomers()
      .subscribe(
        res => {
          this.customers = res.slice(page ? page - 1 : 0, 10)          
          this.pagination = this.setPagination(res, page)
        }
      )
  }

  private setPagination(data: Customer[], current: number = 1, limit: number = 10) {
    let pages = () => Math.ceil(data.length / limit)
    return {
      current: current,
      limit: limit,
      pages: pages(),
      isFirst: current === 1,
      isLast: current >= pages()
    }
  }

  public nextPage() {
    if (!this.pagination.isLast) {
      this.loadCustomers(this.pagination.current + 1)
    }
  }

  public previousPage() {
    if (!this.pagination.isFirst) {
      this.loadCustomers(this.pagination.current - 1)
    }
  }

  public openCustomer(customer: Customer) {
    this.router.navigateByUrl(`/customer/${customer.id}`)
  }

}
