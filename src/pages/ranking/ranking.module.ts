import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { RankingPage } from './ranking';
import { RankingListComponent } from './list/ranking-list.component';
import { RankingItemComponent } from './item/ranking-item.component';

@NgModule({
	imports: [
		IonicModule,
		SharedModule
	],
	declarations: [
		RankingPage,
		RankingListComponent,
		RankingItemComponent
	],
	entryComponents: [
		RankingPage
	]
})
export class RankingModule { }
