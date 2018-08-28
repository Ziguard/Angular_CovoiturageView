import { ModuleWithProviders }    from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HousingDetailComponent } from './housing-detail/housing-detail.component';
import { HousingComponent }       from './housing.component';

const houseRoutes: Routes = [
    {
        path     : '',
        component: HousingComponent
    },
    {
        path:      ':id',
        component: HousingDetailComponent,
        pathMatch: 'full'
    }
];

export const HouseRoute: ModuleWithProviders = RouterModule.forChild(houseRoutes);
