import { inject, Service } from '@angular/core';
import { AccountService } from './account-service';
import { of } from 'rxjs';

@Service()
export class InitService {
    private accountService = inject(AccountService);

    init() {
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            this.accountService.currentUser.set(user);
        }
        return of(null);
    }
}