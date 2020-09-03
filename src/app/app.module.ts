import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VexModule} from '../@vex/vex.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomLayoutModule} from './custom-layout/custom-layout.module';
import {ShachlavModule} from './Shachlav/shachlav-module';
import { DriverTaskShowComponent } from './Shachlav/Components/driver-task-show/driver-task-show.component';

@NgModule({
    declarations: [AppComponent, DriverTaskShowComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // Vex
        VexModule,
        CustomLayoutModule,
        ShachlavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
