import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../../shared/entities';

@Component({
	selector: 'ranking-list',
	templateUrl: 'ranking-list.component.html'
})
export class RankingListComponent  {
	@Input() songs: Song[];
	@Output() select = new EventEmitter<Song>();
}
