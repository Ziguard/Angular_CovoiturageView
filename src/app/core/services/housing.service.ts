import { HttpClient }      from '@angular/common/http';
import { Injectable }      from '@angular/core';
import { Housing }         from '../../shared/models/housing.model';
import { AbstractService } from './abstract.service';

@Injectable()
export class HousingService extends AbstractService<Housing> {
    static readonly RESOURCE_PATH = 'housings';

    constructor(http: HttpClient) {
        super(http, HousingService.RESOURCE_PATH);
    }
}
