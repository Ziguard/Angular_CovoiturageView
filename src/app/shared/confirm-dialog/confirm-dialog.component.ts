import { Component, Inject, OnInit }     from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector   : 'campus-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

    message: string;

    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) message: string
    )
    {
        this.message = message;
    }

    ngOnInit() {
    }

}
