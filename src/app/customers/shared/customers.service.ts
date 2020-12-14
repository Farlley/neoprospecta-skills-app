import { Customer } from './customers.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, pipe } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/customers`)
  }

  getCustomer(id: number): Observable<any> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/customers`)
      .pipe(
         map(res => res.find(x => x.id === id))
      )
  }

  updateCustomer(id: number, data: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${environment.apiUrl}/customers/${id}`, data)
      .pipe();
  }
}
