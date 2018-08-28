import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule
}                                           from '@angular/material';
import { TranslateModule }                  from '@ngx-translate/core';
import { UserService }                      from '../core/services/user.service';
import { SignupComponent }                  from './signup.component';

@NgModule({
    imports     : [
        CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        ReactiveFormsModule,
        TranslateModule,
        FormsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
    declarations: [SignupComponent],
    providers   : [SignupComponent, UserService],
    exports     : [SignupComponent]
})
export class SignupModule {

}
