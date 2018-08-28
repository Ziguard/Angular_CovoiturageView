import { Injectable, Type } from '@angular/core';
import { getType }          from '@angular/core/src/errors';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';
import { Observable }       from 'rxjs/Observable';
import { filter }           from 'rxjs/operators';
import { Subject }          from 'rxjs/Subject';
import { MessageLevel }     from './app-message.service';
import 'rxjs/add/observable/empty';


@Injectable()
export class AppEventService {
    private subjects = {};

    constructor() {}

    public emit<E>(qualifier: string, event: E): void
    {
        if (!qualifier || qualifier.trim().length == 0)
            return;

        if (!this.subjects.hasOwnProperty(qualifier) || !this.subjects[qualifier])
            return;

        this.subjects[qualifier].next(event);
    }

    public getEventSource<E>(qualifier: string, eventType: Type<E>): Observable<E> {
        if (!this.subjects.hasOwnProperty(qualifier) || !this.subjects[qualifier])
            this.subjects[qualifier] = new BehaviorSubject<E>(null);

        if (!(this.subjects[qualifier] instanceof BehaviorSubject))
            throw new Error("The event source for qualifier [" + qualifier +
                "] does not have this type <" + eventType.name + ">");

        return (this.subjects[qualifier] as BehaviorSubject<E>).asObservable()
            .pipe(filter((event:E) => event != null));
    }
}
