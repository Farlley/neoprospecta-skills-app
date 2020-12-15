import { IconsModule } from './../shared/icons.module';
import { CallbackPipe } from './../shared/callback.pipe';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerUpdateComponent,
    CallbackPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class CustomersModule {
  static forRoot() {
    return {
      ngModule: CustomersModule 
    }
  }
}
