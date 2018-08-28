import { CommonModule }                                                                     from '@angular/common';
import { NgModule }                                                                         from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import { RouterModule }                                                                     from '@angular/router';
import { SharedModule }                                                                     from '../shared/shared.module';
import { HeaderComponent }                                                                  from './header.component';

@NgModule({
    imports     : [
        CommonModule,
        SharedModule,
        MatCardModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        RouterModule,
        MatSnackBarModule
    ],
    exports     : [
        HeaderComponent
    ],
    declarations: [HeaderComponent],
    providers   : []
})
export class HeaderModule {
}
