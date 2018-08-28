import { Injectable }              from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TranslateService }        from '@ngx-translate/core';
import { Observable }              from 'rxjs/Observable';
import { ConfirmDialogComponent }  from './confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {

    private static readonly DEFAULT_WIDTH = '450px';

    constructor(
        private matDialog: MatDialog,
        private translateService: TranslateService
    ) {
    }

    public confirm(message: string, i18n?: boolean, width?: string): Observable<boolean> {
        width = width || ConfirmDialogService.DEFAULT_WIDTH;
        if (i18n) {
            message = this.translateService.instant(message);
        }
        let dialogRef: MatDialogRef<ConfirmDialogComponent, boolean> =
            this.matDialog.open(ConfirmDialogComponent, {
                width: width,
                data: message,
                disableClose: true
            });

        return dialogRef.afterClosed();
    }

}
