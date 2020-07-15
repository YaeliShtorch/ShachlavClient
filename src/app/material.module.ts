import { NgModule } from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';


@NgModule({
    imports:[MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatToolbarModule, MatSidenavModule,MatListModule,MatIconModule
    ],
    exports:[MatButtonModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule, MatToolbarModule,MatSidenavModule,MatListModule,MatIconModule
    ]
})
export class MaterialModule{

}