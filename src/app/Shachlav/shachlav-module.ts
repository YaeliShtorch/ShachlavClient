import {NgModule} from '@angular/core';
import {ProviderShowComponent} from './Components/provider-show/provider-show.component';
import {DriverUpdateComponent} from './Components/driver-update/driver-update.component';
import {HomeComponent} from './Components/home/home.component';
import {MaterialTypeOrderComponent} from './Components/material-type-order/material-type-order.component';
import {ManagerUpdateComponent} from './Components/manager-update/manager-update.component';
import {DriverComponent} from './Components/driver/driver.component';
import {CdkDetailRowDirective} from './Directives/cdk-detail-row.directive';
import {DriverRegisterComponent} from './Components/driver-register/driver-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerComponent} from './Components/customer/customer.component';
import {CustomerShowComponent} from './Components/customer-show/customer-show.component';
import {CustomerUpdateComponent} from './Components/customer-update/customer-update.component';
import {ProviderComponent} from './Components/provider/provider.component';
import {CustomerRegisterComponent} from './Components/customer-register/customer-register.component';
import {OrderClayComponent} from './Components/order-clay/order-clay.component';
import {ProviderRegisterComponent} from './Components/provider-register/provider-register.component';
import {AddMaterialsComponent} from './Components/add-materials/add-materials.component';
import {VehicleShowComponent} from './Components/vehicle-show/vehicle-show.component';
import {DriverTaskComponent} from './Components/driver-task/driver-task.component';
import {CustDetailsComponent} from './Components/cust-details/cust-details.component';
import {CustomerInComponent} from './Components/customer-in/customer-in.component';
import {SubHomeComponent} from './Components/sub-home/sub-home.component';
import {AddVehicleTypeComponent} from './Components/add-vehicle/add-PumpTypeVehicle.component';
import {ProviderOrderComponent} from './Components/provider-order/provider-order.component';
import {ManagerComponent} from './Components/manager/manager.component';
import {ProviderUpdateComponent} from './Components/provider-update/provider-update.component';
import {OrderComponent} from './Components/order/order.component';
import {ManagerShowComponent} from './Components/manager-show/manager-show.component';
import {DialogBoxComponent} from './Components/order/dialog-box';
import {DriverShowComponent} from './Components/driver-show/driver-show.component';
import {ManagerRegisterComponent} from './Components/manager-register/manager-register.component';
import {OrderPumpComponent} from './Components/order-pump/order-pump.component';
import {OrderDetailsComponent} from './Components/order-details/order-details.component';
import {OrderAddComponent} from './Components/order-add/order-add.component';
import {LogInComponent} from './Components/log-in/log-in.component';
import {HttpClientModule} from '@angular/common/http';
import {AddVehicleComponent} from './Components/add-vehicle/add-vehicle.component';
import {OrderConcreteComponent} from './Components/order-concrete/order-concrete.component';
import {FooterComponent} from './Components/footer/footer.component';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {ContainerModule} from "../../@vex/directives/container/container.module";
import{MatSnackBarModule}from '@angular/material/snack-bar';
import{MatSlideToggleModule}from '@angular/material/slide-toggle';
import { MatTimepickerModule } from 'mat-timepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { DriverTaskShowComponent } from './Components/driver-task-show/driver-task-show.component';


@NgModule({
    declarations: [ManagerRegisterComponent,
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
        AddVehicleComponent,
        DialogBoxComponent,
        AddVehicleTypeComponent,
        MaterialTypeOrderComponent,
        OrderConcreteComponent,
        OrderClayComponent,
        OrderPumpComponent,
        AddMaterialsComponent,
        ManagerUpdateComponent,
        ManagerShowComponent,
        ProviderShowComponent,
        CustomerShowComponent,
        DriverShowComponent,
        VehicleShowComponent,
        CustomerUpdateComponent,
        DriverUpdateComponent,
        ProviderUpdateComponent,
        CdkDetailRowDirective,
        DriverTaskShowComponent],
    exports: [ManagerRegisterComponent,
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
        AddVehicleComponent,
        DialogBoxComponent,
        AddVehicleTypeComponent,
        MaterialTypeOrderComponent,
        OrderConcreteComponent,
        OrderClayComponent,
        OrderPumpComponent,
        AddMaterialsComponent,
        ManagerUpdateComponent,
        ManagerShowComponent,
        ProviderShowComponent,
        CustomerShowComponent,
        DriverShowComponent,
        VehicleShowComponent,
        CustomerUpdateComponent,
        DriverUpdateComponent,
        ProviderUpdateComponent,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatTimepickerModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        NgxMaterialTimepickerModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule,
        MatExpansionModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatCheckboxModule,
        MatRadioModule,
        RouterModule,
        ContainerModule,
        FlexModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatTimepickerModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatNativeDateModule, 
        
     ],
     providers: [  
        MatDatepickerModule,
        MatNativeDateModule,  
      ],
    entryComponents: [DialogBoxComponent],
})
export class ShachlavModule {
}
