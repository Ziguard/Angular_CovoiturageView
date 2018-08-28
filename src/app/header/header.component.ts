import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar }       from '@angular/material';
import { Router }                       from '@angular/router';
import { Subscription }                 from 'rxjs/Subscription';
import { AuthService }                  from '../core/auth/services/auth.service';
import { AppMessageService }            from '../core/services/application/app-message.service';
import { LoginComponent }               from '../login/login.component';
import { User }                         from '../shared/models/user.model';
import { PopupComponent }               from '../shared/popup/popup.component';

@Component({
    selector   : 'campus-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    prenom: string;
    nom: string;
    user: User = null;
    authenticated: boolean;
    private authSubscription: Subscription;

    constructor(public dialog: MatDialog,
                private router: Router,
                private authService: AuthService,
                private messageService: AppMessageService,
                public snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.authSubscription = this.authService.authenticated.subscribe(auth => {
            this.authenticated = auth;
            if (auth) {
                this.user = this.authService.getUser();
            } else {
                this.user = null;
            }
        });

        this.messageService.getMessageSource().subscribe(message =>
            this.snackBar.openFromComponent(PopupComponent, {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
                data: message
            })
        );

    }

    openDialog(): void {
        const dialogRef = this.dialog.open(LoginComponent, {
            width: '350px',
            data : { prenom: this.prenom, nom: this.nom }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.nom = result;
        });
    }

    logout(): void {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }

}
