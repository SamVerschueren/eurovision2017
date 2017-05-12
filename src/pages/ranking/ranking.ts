import { Component } from '@angular/core';

import { VoteService } from '../../shared/services/vote.service';

@Component({
	selector: 'page-ranking',
	templateUrl: 'ranking.html'
})
export class RankingPage {

	ranking$ = this.voteService.ranking$;

	constructor(
		private voteService: VoteService
	) { }
}
