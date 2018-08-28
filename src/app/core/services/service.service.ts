import { HttpClient }      from '@angular/common/http';
import { Injectable }      from '@angular/core';
import { Service }         from '../../shared/models/service.model';
import { AbstractService } from './abstract.service';

@Injectable()
export class ServiceService extends AbstractService<Service> {
    static readonly RESOURCE_PATH = "services";

    constructor(http: HttpClient) {
        super(http, ServiceService.RESOURCE_PATH);
    }
}
