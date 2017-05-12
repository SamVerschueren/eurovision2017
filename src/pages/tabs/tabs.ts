import { Component } from '@angular/core';

import { HomePage } from '../home';
import { LineUpPage } from '../line-up';
import { RankingPage } from '../ranking';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	home = HomePage;
	lineUp = LineUpPage;
	ranking = RankingPage;
}
