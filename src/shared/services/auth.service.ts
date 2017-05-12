import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

	authenticated$ = this.af.auth.map(auth => auth && auth.facebook && typeof auth.facebook.uid === 'string');
	user$ = this.af.auth.map(auth => auth && auth.facebook);

	constructor(
		private af: AngularFire
	) { }

	facebookAuth() {
		this.af.auth.login();
	}

	isAdmin() {
		return this.user$
			.switchMap(user => {
				if (!user) {
					return Observable.of(false);
				}

				return this.af.database.object(`/roles/${user.uid}`)
					.map(result => result && result.$value === 'admin');
			});
	}

	user() {
		let user;
		this.user$.first().subscribe(u => user = u);
		return user;
	}
}
