import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm }                       from '@angular/forms';
import { Trade }                        from '../../shared/models/trade.model';
import { AnnounceComponent }            from '../sub-component/abstract.component';

@Component({
    selector   : 'campus-exchange-announce',
    templateUrl: './exchange-announce.component.html',
    styleUrls  : ['./exchange-announce.component.scss'],
})
export class ExchangeAnnounceComponent  implements OnInit, AnnounceComponent {

    model: Trade;
    @ViewChild('subForm') subForm: NgForm;

    readonly exchangeTypes = {
        'SALE' : "announce.trade.types.sale",
        'GIFT' : "announce.trade.types.gift",
        'EXCHANGE': "announce.trade.types.trade"
    };

    constructor() {}

    ngOnInit() {
        this.model.exchangeType = 'SALE';
    }
}
