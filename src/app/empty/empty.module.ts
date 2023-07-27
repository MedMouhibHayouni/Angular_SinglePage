import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyPage1Component } from './empty-page1/empty-page1.component';
import { EmptyPage2Component } from './empty-page2/empty-page2.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        EmptyPage1Component,
        EmptyPage2Component,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class EmptyModule { }
