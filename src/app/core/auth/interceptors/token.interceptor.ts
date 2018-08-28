import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector }                                 from '@angular/core';
import { Observable }                                           from 'rxjs/Observable';
import { AuthService }                                          from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    /**
     * @see https://github.com/angular/angular/issues/18224#issuecomment-316957213
     * @angular/http < 5.2.3 : Injecting authService cause cyclic dependency injection
     */
    constructor(
        private injector: Injector,
        /* public auth: AuthService */) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.injector.get(AuthService);
        if (auth.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${auth.getToken()}`
                }
            });
        }
        return next.handle(request);
    }
}
