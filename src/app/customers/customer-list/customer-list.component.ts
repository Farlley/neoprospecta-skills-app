import { Customer } from './../shared/customers.model';
import { CustomersService } from './../shared/customers.service';
import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
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
  limit: number = 10
  pagination: any = this.setPagination(this.customers)

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    // this.loadCustomers()
    this.customersService.getCustomers()
      .subscribe(
        res => {
          this.customersRaw = res
          this.customers = res
          this.pagination = this.setPagination(this.customersRaw, 1)
        }
      )
  }

  public loadCustomers(page?: number) {
    this.pagination = this.setPagination(this.customers, page)
  }

  private setPagination(data: Customer[], current: number = 1, limit: number = 10): any {
    if (data) {
      let pages = () => Math.ceil(data.length / limit)
      let page = current === undefined ? 1 : current
      return {
        start: limit * (page - 1),
        end: limit * page,
        current: current,
        limit: limit,
        pages: pages(),
        isFirst: current === 1,
        isLast: current >= pages()
      }
    }
  }

  public nextPage(): void {
    if (!this.pagination.isLast) {
      this.loadCustomers(this.pagination.current + 1)
    }
  }

  public previousPage(): void {
    if (!this.pagination.isFirst) {
      this.loadCustomers(this.pagination.current - 1)
    }
  }

  public openCustomer(customer: Customer): void {
    this.router.navigateByUrl(`/customer/${customer.id}`)
  }

  public filterCustomers(value: string): void {
    if (value && this.filter) {
      this.customers = this.customers.filter(x => Object.values(x).map(x => x.toString().toLowerCase()).find(x => x.includes(this.filter.toLowerCase())))
    } else {
      this.customers = this.customersRaw
    }
    this.loadCustomers(1)
  }

}
