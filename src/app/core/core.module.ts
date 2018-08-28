import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthGuard }                     from './auth/guards/auth.guard';
import { AuthService }                   from './auth/services/auth.service';
import { InjectDirective }               from './inject.directive';
import { AppEventService }               from './services/application/app-event.service';
import { AppMessageService }             from './services/application/app-message.service';
import { CarpoolingService }             from './services/carpooling.service';
import { PictureService }                from './services/picture.service';

@NgModule({
    declarations: [InjectDirective],
    imports     : [],
    exports     : [InjectDirective],
    providers   : [
        CarpoolingService,
        PictureService,
        AuthService,
        AppMessageService,
        AppEventService,
        AuthGuard
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
