import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Song } from '../../shared/entities';

@Component({
	selector: 'page-song-detail',
	templateUrl: 'song-detail.html'
})
export class SongDetailPage implements OnInit {

	song: Song;

	constructor(
		private navParams: NavParams
	) { }

	ngOnInit() {
		this.song = this.navParams.get('song')
	}
}
