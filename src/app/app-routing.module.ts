import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomLayoutComponent} from './custom-layout/custom-layout.component';
import {OrderComponent} from './Shachlav/Components/order/order.component';
import {VehicleShowComponent} from './Shachlav/Components/vehicle-show/vehicle-show.component';
import {DriverTaskComponent} from './Shachlav/Components/driver-task/driver-task.component';
import {ProviderShowComponent} from './Shachlav/Components/provider-show/provider-show.component';
import {CustDetailsComponent} from './Shachlav/Components/cust-details/cust-details.component';
import {DriverComponent} from './Shachlav/Components/driver/driver.component';
import {SubHomeComponent} from './Shachlav/Components/sub-home/sub-home.component';
import {CustomerInComponent} from './Shachlav/Components/customer-in/customer-in.component';
import {AddVehicleTypeComponent} from './Shachlav/Components/add-vehicle/add-PumpTypeVehicle.component';
import {DriverRegisterComponent} from './Shachlav/Components/driver-register/driver-register.component';
import {CustomerComponent} from './Shachlav/Components/customer/customer.component';
import {CustomerShowComponent} from './Shachlav/Components/customer-show/customer-show.component';
import {ManagerComponent} from './Shachlav/Components/manager/manager.component';
import {ManagerShowComponent} from './Shachlav/Components/manager-show/manager-show.component';
import {DriverShowComponent} from './Shachlav/Components/driver-show/driver-show.component';
import {ProviderComponent} from './Shachlav/Components/provider/provider.component';
import {ManagerRegisterComponent} from './Shachlav/Components/manager-register/manager-register.component';
import {CustomerRegisterComponent} from './Shachlav/Components/customer-register/customer-register.component';
import {OrderAddComponent} from './Shachlav/Components/order-add/order-add.component';
import {ProviderRegisterComponent} from './Shachlav/Components/provider-register/provider-register.component';
import {LogInComponent} from './Shachlav/Components/log-in/log-in.component';
import {AddVehicleComponent} from './Shachlav/Components/add-vehicle/add-vehicle.component';
import { DriverTaskShowComponent } from './Shachlav/Components/driver-task-show/driver-task-show.component';
import { AddMaterialsComponent } from './Shachlav/Components/add-materials/add-materials.component';

const routes: Routes = [
    {path: '', redirectTo: '/home/subHome', pathMatch: 'full'},
    {
        path: '',
        component: CustomLayoutComponent,
        children: [
            {path: 'home/order', component: OrderComponent},
            {path: 'home/subHome', component: SubHomeComponent},


            {path: 'home/login/:typeP', component: LogInComponent},
            {
                path: 'home/customer', component: CustomerComponent,
                children: [
                    {path: 'newOrder', component: OrderAddComponent},
                    {path: 'order/getAllOrders', component: OrderComponent},
                    {path: 'order/getOrderbyId', component: OrderComponent},
                    {path: 'order', component: OrderComponent}
                ]
            },
            {path: 'home/customerin', component: CustomerInComponent},
            {path: 'home/custdetails', component: CustDetailsComponent},
            {path: 'home/provider', component: ProviderComponent},
            {   
                path: 'home/driver', component: DriverComponent,
                children:[
                    {path:'driverTaskShow',component:DriverTaskShowComponent},
                    {path:'driverTaskDone',component:DriverTaskShowComponent},
                ]
                      },
            {path: 'home/driverTask', component: DriverTaskComponent},
            {path: 'home/newOrder', component: OrderAddComponent},
            {
                path: 'home/manager', component: ManagerComponent,
                children: [
                    {path: 'mangerRegister', component: ManagerRegisterComponent},
                    {path: 'driverRegister', component: DriverRegisterComponent},
                    {path: 'providerRegister', component: ProviderRegisterComponent},
                    {path: 'customerRegister', component: CustomerRegisterComponent},
                    {path: 'addVehicle', component: AddVehicleComponent},
                    {path: 'addPumpType', component: AddVehicleTypeComponent},
                    {path: 'addDriverWork', component: DriverTaskComponent},
                    {path: 'showManager', component: ManagerShowComponent},
                    {path: 'showDriver', component: DriverShowComponent},
                    {path: 'showProvider', component: ProviderShowComponent},
                    {path: 'showCustomer', component: CustomerShowComponent},
                    {path: 'showVehicle', component: VehicleShowComponent},
                    {path: 'addMaterial', component:AddMaterialsComponent}

                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'enabled',
        relativeLinkResolution: 'corrected',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
