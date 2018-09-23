import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { CustomerModule } from './customers/customers.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
