import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { AuthService }                        from '../core/auth/services/auth.service';

@Component({
    selector   : 'app-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    submitted: boolean;
    showErrorLogin: boolean = false;

    constructor(private router: Router,
                private fb: FormBuilder,
                private authService: AuthService) {
    }

    get login() {
        return this.form.controls.login;
    }

    get password() {
        return this.form.controls.password;
    }

    ngOnInit() {
        this.form = this.fb.group({
            login   : ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.form.value.login && this.form.value.password) {
            this.authService.login(this.form.value.login, this.form.value.password)
            .subscribe(
                sucess => {
                    this.showErrorLogin = false;
                    this.router.navigate(['']);
                },
                error => this.showErrorLogin = true
            );
        }
    }
}
