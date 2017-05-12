import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { SongService } from './song.service';
import { AuthService } from './auth.service';
import { Song } from '../entities/song';

@Injectable()
export class VoteService {

	score$ = Observable.combineLatest(
		this.songService.playing$,
		this.authService.user$,
		(song: Song, user) => ({song, user})
	)
	.switchMap(res => {
		if (!res.song) {
			return Observable.of(0);
		}

		return this.af.database.object(`votes/${res.song.$key}/${res.user.uid}`).map(res => res.$value);
	});

	ranking$ = Observable.combineLatest(
		this.songService.songs$,
		this.af.database.object('votes'),
		(songs: Song[], votes: any) => {
			for (let i = 0; i < songs.length; i++) {
				const song = songs[i];

				const scores = Object.keys(votes[i] || {});

				if (scores.length === 0) {
					song.score = 0;
				} else {
					song.score = scores.reduce((ret, x) => ret + votes[i][x], 0) / scores.length;
				}
			}

			return songs.sort((a, b) => b.score - a.score);
		}
	);

	constructor(
		private songService: SongService,
		private authService: AuthService,
		private af: AngularFire
	) { }

	vote(score: number) {
		const song = this.songService.playing();
		const user = this.authService.user();

		this.af.database.object(`votes/${song.$key}/${user.uid}`).set(score);
	}
}
