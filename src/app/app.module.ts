import { APP_BASE_HREF, registerLocaleData }               from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import localeFr                                    from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { MatTabsModule }                           from '@angular/material';
import { BrowserModule }                           from '@angular/platform-browser';
import { BrowserAnimationsModule }                 from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule }        from '@ngx-translate/core';
import { TranslateHttpLoader }                     from '@ngx-translate/http-loader';
import { environment }                             from '../environments/environment';
import { AnnounceFormModule }                      from './announce-form/announce-form.module';

import { AppComponent }          from './app.component';
import { AppRoute }              from './app.routing';
import { TokenInterceptor }      from './core/auth/interceptors/token.interceptor';
import { CoreModule }            from './core/core.module';
import { FooterModule }          from './footer/footer.module';
import { HeaderModule }          from './header/header.module';
import { LoginModule }           from './login/login.module';
import { PictureUploaderModule } from './shared/picture-uploader/picture-uploader.module';
import { SignupModule }          from './signup/signup.module';

registerLocaleData(localeFr, 'fr');

@NgModule({
    imports     : [
        AppRoute,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide   : TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps      : [HttpClient]
            }
        }),
        CoreModule.forRoot(),
        LoginModule,
        HeaderModule,
        FooterModule,
        SignupModule,
        AnnounceFormModule,
        PictureUploaderModule,
        MatTabsModule
    ],
    declarations: [
        AppComponent,
    ],
    providers   : [
        HttpClient,
        {
            provide: APP_BASE_HREF,
            useValue: environment.baseHref},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: LOCALE_ID,
            useValue: 'fr'
        },
    ],
    bootstrap   : [AppComponent],
    entryComponents: []
})
export class AppModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
