import { CommonModule } from '@angular/common';

import { NgModule }                                                           from '@angular/core';
import { FlexLayoutModule }                                                   from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }                                   from '@angular/forms';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatIconModule } from '@angular/material';
import { MatGridListModule }                                                  from '@angular/material/grid-list';
import { TranslateModule }                                                    from '@ngx-translate/core';
import { HousingService }                                                     from '../core/services/housing.service';
import { HousingDetailComponent}                                              from './housing-detail/housing-detail.component';

import { HousingComponent }       from './housing.component';
import { HouseRoute }             from './housing.routing';

@NgModule({
    imports     : [
        CommonModule,
        HouseRoute,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatDatepickerModule,
        FlexLayoutModule,
        TranslateModule
    ],
    declarations: [HousingComponent, HousingDetailComponent],
    providers   : [HousingService]
})
export class HousingModule {

}
