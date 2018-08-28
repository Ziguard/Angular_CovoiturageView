import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
import { FlexLayoutModule }            from '@angular/flex-layout';
import { FormsModule }                 from '@angular/forms';
import {
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSliderModule,
    MatTabsModule
}                                      from '@angular/material';
import { BrowserAnimationsModule }     from '@angular/platform-browser/animations';
import { TranslateModule }             from '@ngx-translate/core';
import { CoreModule }                  from '../core/core.module';
import { PictureUploaderModule }       from '../shared/picture-uploader/picture-uploader.module';
import { AnnounceFormComponent }       from './announce-form.component';
import { CarpoolingAnnounceComponent } from './carpooling-announce/carpooling-announce.component';
import { ExchangeAnnounceComponent }   from './exchange-announce/exchange-announce.component';
import { HousingAnnounceComponent }    from './housing-announce/housing-announce.component';
import { KeysPipe }                    from './keys.pipe';
import { ServiceAnnounceComponent }    from './service-announce/service-announce.component';

@NgModule({
    imports     : [
        CommonModule,
        CoreModule,
        FormsModule,
        MatInputModule,
        TranslateModule,
        MatButtonModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatRadioModule,
        PictureUploaderModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatTabsModule,
        MatSliderModule
    ],
    declarations: [AnnounceFormComponent,
                   ExchangeAnnounceComponent, ServiceAnnounceComponent,
                   CarpoolingAnnounceComponent, HousingAnnounceComponent, KeysPipe],
    entryComponents: [ExchangeAnnounceComponent, ServiceAnnounceComponent,
                      CarpoolingAnnounceComponent, HousingAnnounceComponent]
})
export class AnnounceFormModule  {
}
