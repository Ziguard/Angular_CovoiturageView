import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeComponent }       from './trade.component';
import { TradeDetailComponent}  from './trade-detail/trade-detail.component';

const tradeRoutes: Routes = [
    {
        path     : '',
        component: TradeComponent
    },
    {
        path:      ':id',
        component: TradeDetailComponent,
        pathMatch: 'full'
    }
];

export const TradeRoute: ModuleWithProviders = RouterModule.forChild(tradeRoutes);
