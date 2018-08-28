import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpoolingComponent }  from './carpooling.component';

const carpoolingRoutes: Routes = [
    {
        path     : '',
        component: CarpoolingComponent
    }
];

export const CarpoolingRoute: ModuleWithProviders = RouterModule.forChild(carpoolingRoutes);
