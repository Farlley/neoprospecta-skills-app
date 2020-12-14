import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class CustomersModule { }
