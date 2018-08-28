import { CommonModule }                    from '@angular/common';
import { NgModule }                        from '@angular/core';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { SharedModule }                    from '../shared/shared.module';
import { FooterComponent }                 from './footer.component';

@NgModule({
    imports     : [
        CommonModule,
        SharedModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports     : [
        FooterComponent
    ],
    declarations: [FooterComponent],
    providers   : []
})
export class FooterModule {
}
