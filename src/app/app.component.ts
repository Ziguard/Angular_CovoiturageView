import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { TranslateService }                                             from '@ngx-translate/core';
import { InjectDirective }                                              from './core/inject.directive';
import { AppEventService }                                              from './core/services/application/app-event.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    carrouselIndex: number = 0;

    @ViewChild(InjectDirective) componentInject: InjectDirective;

    constructor(private translate: TranslateService,
                private resolver: ComponentFactoryResolver,
                private eventService: AppEventService) {
    }

    ngOnInit() {
        this.i18nConfiguration();
    }

    private i18nConfiguration() {
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
    }

}
