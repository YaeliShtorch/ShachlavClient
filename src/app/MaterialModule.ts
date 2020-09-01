import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatDialogModule } from '@angular/material';
import { MatFormFieldModule, MatRadioModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';
import { MatSelectModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
@NgModule({
    imports: [MatTableModule,
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
        MaterialTimePickerModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule,
        MatExpansionModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatCheckboxModule,
        MatRadioModule

    ],
    exports: [MatTableModule,
        MatButtonModule,
        MatDialogModule,
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
        MatSortModule,
        MatExpansionModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatCheckboxModule,
        MatRadioModule
    ]
})
export class MaterialModule {
}
