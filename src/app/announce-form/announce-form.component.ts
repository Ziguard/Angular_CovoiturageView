import { animate, state, style, transition, trigger }                                 from '@angular/animations';
import { HttpClient }                                                                 from '@angular/common/http';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild } from '@angular/core';
import { NgForm }                                                                     from '@angular/forms';
import { TranslateService }                                                           from '@ngx-translate/core';
import { Observable }                                                                 from 'rxjs/Observable';
import { forkJoin }                                                                   from 'rxjs/observable/forkJoin';
import { from }                                                                       from 'rxjs/observable/from';
import { of }                                                                         from 'rxjs/observable/of';
import { concatMap, filter }                                                          from 'rxjs/operators';
import { InjectDirective }                                                            from '../core/inject.directive';
import { AbstractService }                                                            from '../core/services/abstract.service';
import {
    AppMessageService,
    MessageLevel
}                                                                                     from '../core/services/application/app-message.service';
import { PictureService }                                                             from '../core/services/picture.service';
import { ConfirmDialogService }                                                       from '../shared/confirm-dialog/confirm-dialog.service';
import { Announce }                                                                   from '../shared/models/announce.model';
import { Picture }                                                                    from '../shared/models/picture.model';
import { PictureUploaderComponent }                                                   from '../shared/picture-uploader/picture-uploader.component';
import { AnnounceComponent }                                                          from './sub-component/abstract.component';
import {
    ANNOUNCES_TYPES,
    AnnounceType,
    DEFAULT_TYPE
}                                                                                     from './sub-component/announce.types';

declare type AnnounceFormState = 'NORMAL' | 'UPLOADING' | 'SENDING' | 'SENT';

@Component({
    selector   : 'campus-announce-form',
    templateUrl: './announce-form.component.html',
    styleUrls  : ['./announce-form.component.scss'],
    animations : [
        trigger('announceTypeState', [
            state('none',       style({ filter: 'grayscale(0)', opacity: '1.0' })),
            state('selected',   style({ filter: 'grayscale(1)', opacity: '0.5' })),
            transition('none => selected', animate('300ms ease-in')),
            transition('selected => none', animate('300ms ease-out'))
        ])
    ]
})
export class AnnounceFormComponent implements OnInit {
    readonly path = '../../assets/images/';

    state: AnnounceFormState = 'NORMAL';
    selectedType: AnnounceType = null;
    types: AnnounceType[];

    @ViewChild(InjectDirective) componentInject: InjectDirective;
    @ViewChild(PictureUploaderComponent) uploader: PictureUploaderComponent;
    @ViewChild('form') form: NgForm;

    componentRef: ComponentRef<AnnounceComponent>;
    model: Announce;

    constructor(
        private translateService: TranslateService,
        private pictureService: PictureService,
        private http: HttpClient,
        private resolver: ComponentFactoryResolver,
        private messageService: AppMessageService,
        private dialogService: ConfirmDialogService) {
    }

    ngOnInit() {
        this.types = ANNOUNCES_TYPES;
        for (let type of this.types)
            this.translateService.get(type.caption).subscribe(caption => type.caption = caption);
        this.setAnnounceType(this.types[DEFAULT_TYPE]);
    }

    selectAnnounceType(type: AnnounceType) {
        // If another announce type was already selected, we warn the user that changing it
        // will cause the cleaning of possible form data
        if (this.selectedType != null) {
            this.dialogService.confirm("messages.warning.erasing-form", true)
                .pipe(filter(b => !!b))
                .subscribe(() => this.setAnnounceType(type));
        }
    }

    private setAnnounceType(type: AnnounceType) {
        this.selectedType = type;
        this.setComponent(type.component);
        this.model = this.componentRef.instance.model = new type.model();
    }

    private setComponent(component: Type<AnnounceComponent>) {
        this.componentInject.viewContainerRef.remove();
        const componentFactory = this.resolver.resolveComponentFactory(component);
        this.componentRef = this.componentInject.viewContainerRef.createComponent(componentFactory);
    }

    private submit(): void {
        let service: AbstractService<Announce> = new this.selectedType.service(this.http);
        this.state = 'SENDING';
        service.create(this.model).subscribe(() => {
            this.state = 'SENT';
        }, err => {
            this.state = 'NORMAL';
            this.messageService.emitI18N(MessageLevel.ERROR, "messages.errors.send");
            console.error(err);
        });
    }

    public send(): void {
        this.state = 'UPLOADING';
        this.uploadImages().subscribe(pictures => {
            this.model.pictures = pictures;
            this.submit();
        },
        err => {
            this.state = 'NORMAL';
            this.messageService.emitI18N(MessageLevel.ERROR, "messages.errors.upload");
            console.error(err);
        });
    }

    private shouldUpload(): boolean {
        return this.selectedType.upload && this.uploader && this.uploader.getCount() > 0;
    }

    private uploadImages(): Observable<Picture[]> {
        if (!this.shouldUpload())
            return of([]);

        return forkJoin(from(this.uploader.getImages()).pipe(
            concatMap(file => this.pictureService.upload(file)),
        ));
    }

    getButtonCaption(): string {
        switch (this.state) {
            case 'UPLOADING': return 'announce.uploading';
            case 'SENDING': return 'announce.sending';
            default: return 'announce.create';
        }
    }

    isPending(): boolean {
        return this.state == 'UPLOADING' || this.state == 'SENDING';
    }

    isValid(): boolean {
        return this.form.valid && this.componentRef.instance.subForm.valid;
    }

    goHome() {
        window.location.href = '/';
    }

}
