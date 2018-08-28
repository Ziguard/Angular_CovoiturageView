import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login.component';

const loginRoutes: Routes = [
    {
        path     : 'login',
        component: LoginComponent
    }
];

export const LoginRoute: ModuleWithProviders = RouterModule.forChild(loginRoutes);
