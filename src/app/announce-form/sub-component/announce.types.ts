import { Type }                        from '@angular/core';
import { AbstractService }             from '../../core/services/abstract.service';
import { CarpoolingService }           from '../../core/services/carpooling.service';
import { ExchangeService }             from '../../core/services/exchange.service';
import { HousingService }              from '../../core/services/housing.service';
import { ServiceService }              from '../../core/services/service.service';
import { Announce }                    from '../../shared/models/announce.model';
import { Carpooling }                  from '../../shared/models/carpooling.model';
import { Housing }                     from '../../shared/models/housing.model';
import { Service }                     from '../../shared/models/service.model';
import { Trade }                       from '../../shared/models/trade.model';
import { CarpoolingAnnounceComponent } from '../carpooling-announce/carpooling-announce.component';
import { ExchangeAnnounceComponent }   from '../exchange-announce/exchange-announce.component';
import { HousingAnnounceComponent }    from '../housing-announce/housing-announce.component';
import { ServiceAnnounceComponent }    from '../service-announce/service-announce.component';
import { AnnounceComponent }           from './abstract.component';

export declare type AnnounceTypeKey = 'CARPOOLING' | 'EXCHANGE' | 'SERVICE' | 'HOUSING';

export interface AnnounceType {
    caption: string;
    type: AnnounceTypeKey,
    image: string;
    component: Type<AnnounceComponent>,
    model: Type<Announce>,
    service: Type<AbstractService<Announce>>,
    upload: boolean;
}

export const DEFAULT_TYPE = 2;

export const ANNOUNCES_TYPES: AnnounceType[] = [
    {
        caption  : 'announce.carpooling',
        type     : 'CARPOOLING',
        image    : 'car.svg',
        component: CarpoolingAnnounceComponent,
        model    : Carpooling,
        service  : CarpoolingService,
        upload   : false
    },
    {
        caption  : 'announce.service',
        type     : 'SERVICE',
        image    : 'handshake.svg',
        component: ServiceAnnounceComponent,
        model    : Service,
        service  : ServiceService,
        upload   : true
    },
    {
        caption  : 'announce.trade.title',
        type     : 'EXCHANGE',
        image    : 'box.svg',
        component: ExchangeAnnounceComponent,
        model    : Trade,
        service  : ExchangeService,
        upload   : true
    },
    {
        caption  : 'announce.housing.title',
        type     : 'HOUSING',
        image    : 'house.svg',
        component: HousingAnnounceComponent,
        model    : Housing,
        service  : HousingService,
        upload   : true
    }
];
