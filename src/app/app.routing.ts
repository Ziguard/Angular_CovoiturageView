import { ModuleWithProviders }                     from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnnounceFormComponent }                   from './announce-form/announce-form.component';
import { AuthGuard }                               from './core/auth/guards/auth.guard';
import { SignupComponent }                         from './signup/signup.component';

const appRoutes: Routes = [
    {
        path        : '',
        loadChildren: 'app/home/home.module#HomeModule'
        // canLoad: [ NotAuthGuard ]
    },
    {
        path    : '',
        children: [
            {
                path        : 'carpoolings',
                loadChildren: 'app/carpooling/carpooling.module#CarpoolingModule'
                // canLoad: [ AuthGuard ],
            },
            {
                path        : 'services',
                loadChildren: 'app/services/services.module#ServicesModule'
                // canLoad: [ AuthGuard ]
            },
            {
                path        : 'trade',
                loadChildren: 'app/trade/trade.module#TradeModule'
                // canLoad: [ AuthGuard ]
            },
            {
                path        : 'housing',
                loadChildren: 'app/housing/housing.module#HousingModule'
                // canLod: [ AuthGuard ]
            },
            {
                path        : 'signup',
                component   : SignupComponent
            },
            {
                path        : 'new-announce',
                component   : AnnounceFormComponent,
                canActivate : [AuthGuard]
            }
        ]
    },
    // debug
    // {
    //     path      : '**',
    //     redirectTo: ''
    // }
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
});
