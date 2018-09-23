// angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerModule } from './customers/customers.module';

import { CustomersComponent } from './customers/customers.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { CustomerEditComponent } from './customers/customers-edit.component';
import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
import { IRouting } from './shared/interfaces';




const appRoutes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id', component: CustomerEditComponent },
  // { path: 'customers/:id', component: CustomerEditReactiveComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

// export const appRouting: IRouting = {
//  routes: RouterModule.forRoot(appRoutes),
//  components: [CustomersComponent, CustomerEditComponent, CustomerEditReactiveComponent, CustomersGridComponent]
// };

// export const routing = RouterModule.forRoot(appRoutes);


export class AppRoutingModule { }
