import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent }    from './services.component';

const servicesRoutes: Routes = [
    {
        path     : 'services',
        component: ServicesComponent
    }
];

export const ServicesRoute: ModuleWithProviders = RouterModule.forChild(servicesRoutes);
