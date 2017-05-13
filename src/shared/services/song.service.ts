import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { CacheService } from './cache.service';
import { Song } from '../entities';

@Injectable()
export class SongService {

	private playingCounter$ = this.af.database.object('/playing')
		.map(result => result.$value)
		.publishReplay(1)
		.refCount();

	// List of all the songs in the correct order
	songs$ = Observable.combineLatest(
		this.af.database.list('/songs').map(songs => [...songs]),
		this.af.database.object('/votes'),
		this.authService.user$,
		(songs: Song[], votes: any, user) => {
			for (const song of songs) {
				const songVotes = votes[song.$key] || {};
				song.userScore = songVotes[user.uid];
			}

			return songs;
		}
	)
	.map((result: Song[]) => result.sort((a, b) => a.order - b.order))
	.publishReplay(1)
	.refCount();

	// The song that is currently playing
	playing$ = Observable.combineLatest(
		this.songs$,
		this.playingCounter$,
		(songs: Song[], index: number) => songs.find(song => song.order === index)
	);

	constructor(
		private authService: AuthService,
		private af: AngularFire,
		private cacheService: CacheService
	) {
		this.songs$.do(songs => {
			for (const song of songs) {
				this.cacheService.cache(song);
			}
		}).subscribe();
	}

	next() {
		this.af.database.object('/playing').$ref.transaction(value => value + 1);
	}

	playing() {
		let song: Song;
		this.playing$.subscribe(s => song = s);
		return song;
	}

	findNextsong() {
		let song: Song;

		Observable.combineLatest(
			this.songs$,
			this.playingCounter$,
			(songs: Song[], index: number) => songs.find(song => song.order === index + 1)
		).first().subscribe(result => {
			song = result;
		});

		return song;
	}
}
