import { HttpClient }      from '@angular/common/http';
import { Injectable }      from '@angular/core';
import { Trade }           from '../../shared/models/trade.model';
import { AbstractService } from './abstract.service';

@Injectable()
export class ExchangeService extends AbstractService<Trade> {
    static readonly RESOURCE_PATH = "exchanges";

    constructor(http: HttpClient) {
        super(http, ExchangeService.RESOURCE_PATH);
    }
}
