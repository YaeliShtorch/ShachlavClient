import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';


@NgModule({
    imports:[MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule],
    exports:[MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule]
})
export class MaterialModule{

}