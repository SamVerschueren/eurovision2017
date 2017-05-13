import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { VoteService } from '../../shared/services/vote.service';
import { Song } from '../../shared/entities';
import { SongDetailPage } from '../song-detail';

@Component({
	selector: 'page-ranking',
	templateUrl: 'ranking.html'
})
export class RankingPage {

	ranking$ = this.voteService.ranking$;

	constructor(
		private app: App,
		private voteService: VoteService
	) { }

	showDetails(song: Song) {
		this.app.getRootNav().push(SongDetailPage, {
			song
		});
	}
}
