import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { AuthService } from '../shared/services';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth';

@Component({
	templateUrl: 'app.component.html'
})
export class MyApp {
	@ViewChild(Nav) nav;
	rootPage:any = TabsPage;

	constructor(
		private auth: AuthService
	) { }

	ngOnInit() {
		this.auth.authenticated$.subscribe(isAuthenticated => {
			if (!isAuthenticated) {
				this.rootPage = AuthPage
				// this.nav.push(AuthPage);
			} else {
				this.rootPage = TabsPage
			}
		});
	}
}
