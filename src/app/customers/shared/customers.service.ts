import { Customer } from './customers.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/customers`)
      .pipe();
  }

  updateCustomer(data: Customer[]): Observable<Customer[]> {
    return this.http.put<Customer[]>(`${environment.apiUrl}/customers`, data)
      .pipe();
  }
}
