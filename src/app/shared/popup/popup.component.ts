import { Component, Inject }                  from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';
import { Message }                            from '../../core/services/application/app-message.service';

@Component({
    selector   : 'campus-popup',
    templateUrl: './popup.component.html',
    styleUrls  : ['./popup.component.scss']
})
export class PopupComponent {
    private readonly path = '../../assets/images/';
    private readonly extension = '.svg';

    message: Message;

    constructor(
        public snackRef: MatSnackBarRef<PopupComponent>,
        @Inject(MAT_SNACK_BAR_DATA) data: any) {
        this.message = data;
    }

    getImage(): string {
        return [this.path, this.message.level, this.extension].join('');
    }

    close() {
        this.snackRef.dismiss();
    }
}
