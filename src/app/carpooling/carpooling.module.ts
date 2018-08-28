import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { MatCardModule }       from '@angular/material';
import { MomentModule }        from 'ngx-moment';
import { SharedModule }        from '../shared/shared.module';
import { CarpoolingComponent } from './carpooling.component';
import { CarpoolingRoute }     from './carpooling.routing';

@NgModule({
    imports     : [
        CommonModule,
        SharedModule,
        CarpoolingRoute,
        MatCardModule,
        MomentModule
    ],
    declarations: [CarpoolingComponent],
    providers   : []
})
export class CarpoolingModule {
}
