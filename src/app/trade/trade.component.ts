import { Component, OnInit } from '@angular/core';
import { ExchangeService }   from '../core/services/exchange.service';
import { Trade }             from '../shared/models/trade.model';

@Component({
    selector   : 'app-trade',
    templateUrl: './trade.component.html',
    styleUrls  : ['./trade.component.css']
})
export class TradeComponent implements OnInit {
    trades: Trade[];

    constructor(private exchangeService: ExchangeService) {
    }

    ngOnInit() {
        this.exchangeService.getAll().subscribe(trades =>
           this.trades = trades);
    }
}
