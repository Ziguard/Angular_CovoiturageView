import { HttpClient }      from '@angular/common/http';
import { Injectable }      from '@angular/core';
import { Carpooling }      from '../../shared/models/carpooling.model';
import { AbstractService } from './abstract.service';

@Injectable()
export class CarpoolingService extends AbstractService<Carpooling> {
    static readonly RESOURCE_PATH = "carpoolings";

    constructor(http: HttpClient) {
        super(http, CarpoolingService.RESOURCE_PATH);
    }
}
