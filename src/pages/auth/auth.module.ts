import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { AuthPage } from './auth';

@NgModule({
	imports: [
		IonicModule,
		SharedModule
	],
	declarations: [
		AuthPage
	],
	entryComponents: [
		AuthPage
	]
})
export class AuthModule { }
