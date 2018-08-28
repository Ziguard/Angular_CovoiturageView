import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar }            from '@angular/material';
import { Router }                 from '@angular/router';
import { TranslateService }       from '@ngx-translate/core';
import { AuthService }            from '../core/auth/services/auth.service';
import { UserService }            from '../core/services/user.service';
import { User }                   from '../shared/models/user.model';

@Component({
    selector   : 'campus-signup',
    templateUrl: './signup.component.html',
    styleUrls  : ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    user: User;

    progress: boolean = false;
    created: boolean = false;

    validation: any = {
        email: {
            pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$'
        },
        phone: {
            pattern: '(0|\\+33|0033)[1-9][0-9]{8}'
        },
        names: {
            pattern: '[A-Za-z\- éèëêàâûùîôö]+'
        },
        login: {
            pattern: '[A-Za-z0-9#!\-\_]+'
        }
    };

    constructor(private router: Router,
                private fb: FormBuilder,
                private authService: AuthService,
                private translate: TranslateService,
                private userService: UserService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.user = new User();
    }

    redirectToHome() {
        setTimeout(() => this.router.navigateByUrl(''), 2000);
    }

    showMessage(message: string) {
        this.snackBar.open(message, '', {
            duration          : 2000,
            verticalPosition  : 'top',
            horizontalPosition: 'center'
        });
    }

    onSubmit() {
        const prefix = 'signup.messages.errors.';
        this.progress = true;

        this.userService.create(this.user).subscribe(
            success => {
                this.translate.get('signup.messages.welcome', {
                    firstName: this.user.firstName
                }).subscribe(message => this.showMessage(message));
                this.progress = false;
                this.created = true;
                this.redirectToHome();
            },
            fail => {
                if (fail.error.code) {
                    switch (fail.error.code) {
                        case 500:
                        case 400:
                            this.translate.get(prefix + fail.error.code).subscribe(message => this.showMessage(message));
                            break;

                        default:
                            this.translate.get(fail.error.message).subscribe(message => this.showMessage(message));
                            break;
                    }
                } else {
                    this.translate.get(prefix + 'network').subscribe(message => this.showMessage(message));
                }
                this.progress = false;
            }
        );
    }
}
