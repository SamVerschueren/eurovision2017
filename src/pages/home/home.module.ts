import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { HomePage } from './home';
import { VoteDetailsComponent } from './vote-details/vote-details.component';
import { ScoreCardComponent } from './score-card/score-card.component';

@NgModule({
	imports: [
		IonicModule,
		SharedModule
	],
	declarations: [
		HomePage,
		VoteDetailsComponent,
		ScoreCardComponent
	],
	entryComponents: [
		HomePage
	]
})
export class HomeModule { }
