import { CommonModule }                                    from '@angular/common';
import { NgModule }                                        from '@angular/core';
import { FlexLayoutModule }                                from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { TranslateModule }                                 from '@ngx-translate/core';
import { ConfirmDialogComponent }                          from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService }                            from './confirm-dialog/confirm-dialog.service';
import { PopupComponent }                                  from './popup/popup.component';

@NgModule({
    imports     : [
        CommonModule,
        TranslateModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        TranslateModule,
        FlexLayoutModule
    ],
    declarations: [
        PopupComponent,
        ConfirmDialogComponent
    ],
    entryComponents: [
        PopupComponent,
        ConfirmDialogComponent
    ],
    providers: [
        ConfirmDialogService
    ]
})
export class SharedModule {
}
