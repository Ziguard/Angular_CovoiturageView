import { CommonModule } from '@angular/common';

import { NgModule }                                                           from '@angular/core';
import { FlexLayoutModule }                                                   from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }                                   from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatIconModule } from '@angular/material';
import { MatGridListModule }                                                  from '@angular/material/grid-list';
import { TranslateModule }                                                    from '@ngx-translate/core';
import { ExchangeService }                                                    from '../core/services/exchange.service';
import { TradeDetailComponent }                                               from './trade-detail/trade-detail.component';

import { TradeComponent } from './trade.component';
import { TradeRoute }     from './trade.routing';

@NgModule({
    imports     : [
        CommonModule,
        TradeRoute,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatDatepickerModule,
        FlexLayoutModule,
        TranslateModule
    ],
    declarations: [TradeComponent, TradeDetailComponent],
    providers   : [ExchangeService]
})
export class TradeModule {

}
