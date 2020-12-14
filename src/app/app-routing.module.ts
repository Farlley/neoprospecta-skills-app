import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'customer/:id',
    component: CustomerUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
