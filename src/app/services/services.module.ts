import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';
import { ServicesComponent } from './services.component';

import { ServicesRoute } from './services.routing';

@NgModule({
    imports     : [
        CommonModule,
        ServicesRoute
    ],
    declarations: [ServicesComponent],
    providers   : [ServicesComponent]
})
export class ServicesModule {
}
