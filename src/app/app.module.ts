import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { AuthModule } from '../pages/auth';
import { HomeModule } from '../pages/home';
import { LineUpModule } from '../pages/line-up';
import { SongDetailModule } from '../pages/song-detail';
import { RankingModule } from '../pages/ranking';
import { TabsPage } from '../pages/tabs/tabs';
import { firebaseConfig, firebaseAuthConfig } from './app.config';
import { SharedModule } from '../shared/shared.module';

const PAGES = [
	AuthModule,
	HomeModule,
	LineUpModule,
	SongDetailModule,
	RankingModule
];

@NgModule({
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
		SharedModule.forRoot(),
		...PAGES
	],
	declarations: [
		MyApp,
		TabsPage
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		TabsPage
	],
	providers: [
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {}
