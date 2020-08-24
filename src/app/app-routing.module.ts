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
import { DriverTaskComponent } from './Components/driver-task/driver-task.component';
import { AddVehicleComponent } from './Components/add-vehicle/add-vehicle.component';
import { DriverWork } from './Models/driverWork.models';

const routes: Routes = [
  { path: '', redirectTo: '/home/subHome',  pathMatch: 'full' },
  { path: 'home/order',component: OrderComponent},
  { path: 'home/subHome',component: SubHomeComponent},
  
 
  { path: 'home/login/:typeP', component: LogInComponent },
  { path: 'home/customer', component: CustomerComponent,
  children: [
    { path: 'addOrder',component: OrderAddComponent  },
    { path: 'order/getAllOrders', component:OrderComponent},
    { path: 'order/getOrderbyId', component:OrderComponent},
    { path: 'order', component:OrderComponent}
  ]  },
  { path: 'home/customerin', component: CustomerInComponent },
  { path: 'home/custdetails', component: CustDetailsComponent },
  { path: 'home/provider', component: ProviderComponent },
  { path: 'home/driver', component: DriverComponent },
  { path: 'home/driverTask', component: DriverTaskComponent },
  { path: 'home/newOrder', component: OrderAddComponent },
  { path: 'home/manager', component: ManagerComponent,
  children: [
    { path: 'mangerRegister',component: ManagerRegisterComponent  },
    { path: 'driverRegister',component: DriverRegisterComponent  },
    { path: 'providerRegister',component: ProviderRegisterComponent  },
    { path: 'customerRegister', component: CustomerRegisterComponent },
    { path: 'addVehicle', component:AddVehicleComponent},
    { path: 'addDriverWork', component: DriverTaskComponent }
  
  ]  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
