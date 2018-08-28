import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { SwiperModule }                   from 'angular2-useful-swiper';
import { SharedModule }                   from '../shared/shared.module';
import { HomeComponent }                  from './home.component';
import { HomeRoute }                      from './home.routing';

@NgModule({
    imports     : [
        CommonModule,
        SharedModule,
        HomeRoute,
        MatCardModule,
        MatButtonModule,
        SwiperModule
    ],
    declarations: [HomeComponent],
    providers   : []
})
export class HomeModule {

}
