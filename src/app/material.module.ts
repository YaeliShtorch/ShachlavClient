import { NgModule } from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';
import {MatSelectModule} from '@angular/material';

@NgModule({
    imports:[MatTableModule,
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
        MaterialTimePickerModule, 
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule

],
    exports:[MatTableModule,
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
        MaterialTimePickerModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule
]

})
export class MaterialModule{

}