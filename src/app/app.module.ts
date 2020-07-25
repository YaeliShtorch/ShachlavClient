import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { ManagerRegisterComponent } from './Components/manager-register/manager-register.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { ManagerComponent } from './Components/manager/manager.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { DriverComponent } from './Components/driver/driver.component';
import { ProviderComponent } from './Components/provider/provider.component';
import { CustDetailsComponent } from './Components/cust-details/cust-details.component';
import { CustomerRegisterComponent } from './Components/customer-register/customer-register.component';
import { CustomerInComponent } from './Components/customer-in/customer-in.component';
import { DriverRegisterComponent } from './Components/driver-register/driver-register.component';
import { DriverTaskComponent } from './Components/driver-task/driver-task.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { ProviderOrderComponent } from './Components/provider-order/provider-order.component';
import { ProviderRegisterComponent } from './Components/provider-register/provider-register.component';
import { SubHomeComponent } from './Components/sub-home/sub-home.component';
import { OrderAddComponent } from './Components/order-add/order-add.component';
import { FooterComponent } from './homeComponents/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagerRegisterComponent,
    ManagerComponent,
    CustomerComponent,
    LogInComponent,
    DriverComponent,
    ProviderComponent,
    CustDetailsComponent,
    CustomerRegisterComponent,
    CustomerInComponent,
    DriverRegisterComponent,
    DriverTaskComponent,
    HomeComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProviderOrderComponent,
    ProviderRegisterComponent,
    SubHomeComponent,
    OrderAddComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
       FormsModule,
ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
