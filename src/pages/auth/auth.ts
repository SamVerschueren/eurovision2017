import { Component } from '@angular/core';

import { AuthService } from '../../shared/services';

@Component({
	selector: 'page-auth',
	templateUrl: 'auth.html'
})
export class AuthPage {

	authenticated$ = this.auth.authenticated$;

	constructor(
		private auth: AuthService
	) { }

	onFacebookAuth() {
		this.auth.facebookAuth();
	}
}
