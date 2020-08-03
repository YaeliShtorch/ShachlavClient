import { NgModule } from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material';


@NgModule({
    imports:[MatTableModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatToolbarModule, MatSidenavModule,MatListModule,MatIconModule
        ,MatCardModule,MatPaginatorModule,MatSortModule],
    exports:[MatTableModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule, MatToolbarModule,MatSidenavModule,MatListModule,MatIconModule
        ,MatCardModule,MatPaginatorModule,MatSortModule]
})
export class MaterialModule{

}