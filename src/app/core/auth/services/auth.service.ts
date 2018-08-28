import { HttpClient }      from '@angular/common/http';
import { Injectable }      from '@angular/core';
import * as moment         from 'moment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment }     from '../../../../environments/environment';
import { User }            from '../../../shared/models/user.model';

export interface LoginResponse<T> {
    expiration: number;
    payload: T;
    token: string;
}

@Injectable()
export class AuthService {
    apiUrl: string = environment.apiUrl;
    authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    constructor(private http: HttpClient) {
        this.authenticated.next(this.isLoggedIn());
    }

    login(username: string, password: string) {
        return this.http.post<LoginResponse<User>>(this.apiUrl + 'login', { username, password })
        .do(res => {
            this.setSession(res);
            this.authenticated.next(true);
        })
        .shareReplay();
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        window.location.href = '/';
        this.authenticated.next(false);
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem('token') !== null;
        // return moment().isBefore(this.getExpiration());
    }

    getExpiration() {
        const expiration = localStorage.getItem('expiration');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    private setSession(authResult: LoginResponse<User>) {
        const expiresAt = moment().add(authResult.expiration, "seconds");

        localStorage.setItem('token', authResult.token);
        localStorage.setItem('expiration', JSON.stringify(expiresAt.valueOf()));
        localStorage.setItem('user', JSON.stringify(authResult.payload));
    }

    /**
     * Retrives the user jwt token from local storage
     * @returns {string} JWT token of user session
     */
    getToken() {
        return localStorage.getItem('token');
    }

    /**
     * Retrieves user information from local storage
     * @returns {User}
     */
    getUser(): User {
        return JSON.parse(localStorage.getItem('user'));
    }
}
