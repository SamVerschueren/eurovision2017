import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { SongDetailPage } from './song-detail';

@NgModule({
	imports: [
		IonicModule,
		SharedModule
	],
	declarations: [
		SongDetailPage
	],
	entryComponents: [
		SongDetailPage
	]
})
export class SongDetailModule { }
