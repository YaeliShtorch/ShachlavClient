import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProgressBarModule } from '../components/progress-bar/progress-bar.module';
import { SearchModule } from '../components/search/search.module';
import {ContainerModule} from "../directives/container/container.module";
import {FlexModule} from "@angular/flex-layout";
import {PageLayoutModule} from "../components/page-layout/page-layout.module";


@NgModule({
  declarations: [LayoutComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        ProgressBarModule,
        SearchModule,
        ContainerModule,
        FlexModule,
        PageLayoutModule
    ],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
