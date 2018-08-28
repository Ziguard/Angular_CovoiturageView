import { Injectable }       from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';
import { Observable }       from 'rxjs/Observable';
import { filter }           from 'rxjs/operators';
import { Subject }          from 'rxjs/Subject';

export enum MessageLevel {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success'
}

export interface Message {
    text: string;
    level: MessageLevel;
}

@Injectable()
export class AppMessageService {
    private subject: Subject<Message> = new BehaviorSubject<Message>(null);

    constructor(private translateService: TranslateService) {}

    public emit(level: MessageLevel, message: string, ...args: any[]): void
    {
        if (!message || message.trim() == '')
            return;

        message = (args.length > 0) ? AppMessageService.format(message, args) : message;
        this.subject.next(<Message> {
            text: message,
            level: level
        });
    }

    public emitI18N(level: MessageLevel, key: string, ...args: any[]): void
    {
        if (!key || key.trim() == '')
            return;

        this.translateService.get(key).subscribe(message => this.emit(level, message, args));
    }

    public getMessageSource(): Observable<Message> {
        return this.subject.asObservable().pipe(
            filter(message => message != null));
    }

    private static format(message: string, ...args: any[]): string {
        let result = message;
        while (result.indexOf("{}") > -1 && args.length > 0) {
            let arg = args.shift();
            arg = arg ? arg.toString() : '';
            result = result.replace('{}', arg);
        }
        return result;
    }
}
