import { CommonModule }                                                     from '@angular/common';
import { NgModule }                                                         from '@angular/core';
import { FormsModule, ReactiveFormsModule }                                 from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { SharedModule }                                                     from '../shared/shared.module';
import { LoginComponent }                                                   from './login.component';
import { LoginRoute }                                                       from './login.routing';

@NgModule({
    imports     : [
        CommonModule,
        SharedModule,
        LoginRoute,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    providers   : [LoginComponent]
})
export class LoginModule {
}
