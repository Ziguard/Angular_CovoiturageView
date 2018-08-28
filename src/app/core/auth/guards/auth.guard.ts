import { Injectable }                      from '@angular/core';
import { CanActivate, Router }             from '@angular/router';
import { AppMessageService, MessageLevel } from '../../services/application/app-message.service';
import { AuthService }                     from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService,
                private messageService: AppMessageService) {
    }

    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']).then(() =>
                this.messageService.emitI18N(MessageLevel.INFO, 'messages.errors.must-login'));
            return false;
        }
    }
}
