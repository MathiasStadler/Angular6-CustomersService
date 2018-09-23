import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomerEditComponent } from './customers-edit.component';
import { CustomerEditReactiveComponent } from './customer-edit-reactive.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [CustomersComponent, CustomersGridComponent, CustomerEditComponent, CustomerEditReactiveComponent],
    exports: [CustomersComponent, CustomersGridComponent, CustomerEditComponent, CustomerEditReactiveComponent]
})
export class CustomerModule { }
