import { HttpClient }      from '@angular/common/http';
import { Injectable }      from '@angular/core';
import { User }            from '../../shared/models/user.model';
import { AbstractService } from './abstract.service';

@Injectable()
export class UserService extends AbstractService<User> {
    static readonly RESOURCE_PATH = "users";

    constructor(http: HttpClient) {
        super(http, UserService.RESOURCE_PATH);
    }
}
