import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './../ui/pagination/pagination.component';
import { IconsModule } from './../shared/icons.module';
import { CallbackPipe } from './../shared/callback.pipe';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerUpdateComponent,
    PaginationComponent,
    CallbackPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ]
})
export class CustomersModule {
  static forRoot() {
    return {
      ngModule: CustomersModule 
    }
  }
}
