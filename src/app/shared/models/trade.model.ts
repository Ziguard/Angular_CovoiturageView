import { Announce }         from './announce.model';
import { TradeCategory }    from './trade-category.model';

export declare type TradeTypeKey = 'SALE' | 'GIFT' | 'EXCHANGE';

export class Trade extends Announce {
    id: number;
    category: TradeCategory;
    exchangeType: TradeTypeKey;
    packages: any[];

    constructor() {
        super();
        this.announceType = 'EXCHANGE';
        this.exchangeType = 'SALE';
    }

}
