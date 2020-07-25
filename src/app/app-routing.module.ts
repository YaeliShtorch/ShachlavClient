import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import {OrderComponent} from './Components/order/order.component';
import {ManagerRegisterComponent} from './Components/manager-register/manager-register.component';
import {DriverRegisterComponent} from './Components/driver-register/driver-register.component';
import {ProviderRegisterComponent} from './Components/provider-register/provider-register.component';
import {CustomerRegisterComponent} from './Components/customer-register/customer-register.component';
import {CustomerComponent} from './Components/customer/customer.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { CustomerInComponent } from './Components/customer-in/customer-in.component';
import { CustDetailsComponent } from './Components/cust-details/cust-details.component';
import { ManagerComponent } from './Components/manager/manager.component';
import {SubHomeComponent} from './Components/sub-home/sub-home.component'
import { ProviderComponent } from './Components/provider/provider.component';
import { DriverComponent } from './Components/driver/driver.component';
import {OrderAddComponent } from './Components/order-add/order-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/subHome',  pathMatch: 'full' },
  { path: 'home/order',component: OrderComponent},
  { path: 'home/subHome',component: SubHomeComponent},
  { path: 'home/mangerRegister',component: ManagerRegisterComponent  },
  { path: 'home/driverRegister',component: DriverRegisterComponent  },
  { path: 'home/providerRegister',component: ProviderRegisterComponent  },
  { path: 'home/customerRegister', component: CustomerRegisterComponent },
<<<<<<< HEAD
  { path: 'home/customer', component: CustomerComponent },
  { path: 'home/login/:typeP', component: LogInComponent },
=======
  { path: 'home/customer', component: CustomerComponent,
  children: [
    { path: 'order/getAllOrders', component:OrderComponent},
    { path: 'order/getOrderbyId', component:OrderComponent},
    { path: 'order', component:OrderComponent}
  ]  },
  { path: 'home/login', component: LogInComponent },
>>>>>>> 37ca1cb6c56b39c9d32b7e217ad907342303381d
  { path: 'home/customerin', component: CustomerInComponent },
  { path: 'home/custdetails', component: CustDetailsComponent },
  { path: 'home/provider', component: ProviderComponent },
  { path: 'home/driver', component: DriverComponent },
  { path: 'home/newOrder', component: OrderAddComponent },
  { path: 'home/manager', component: ManagerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
