import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { APP_SERVICES } from './services';
import { APP_MODULES } from './modules';
import { APP_DIRECTIVES } from './directives';

@NgModule({
	imports: [],
	exports: [
		IonicModule,
		AngularFireModule,
		...APP_MODULES,
		...APP_DIRECTIVES
	],
	declarations: [
		...APP_DIRECTIVES
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				...APP_SERVICES
			]
		}
	}
}
