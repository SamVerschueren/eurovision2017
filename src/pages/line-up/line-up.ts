import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { SongService } from '../../shared/services';
import { Song } from '../../shared/entities';
import { SongDetailPage } from '../song-detail';

@Component({
	selector: 'page-line-up',
	templateUrl: 'line-up.html'
})
export class LineUpPage {

	songs$ = this.songService.songs$
		.map(songs => songs.sort((a, b) => a.order - b.order));

	constructor(
		private app: App,
		private songService: SongService
	) { }

	navigateToDetails(song: Song) {
		this.app.getRootNav().push(SongDetailPage, {
			song
		});
	}
}
