import { Component } from '@angular/core';
import { App, AlertController, ToastController } from 'ionic-angular';

import { AuthService, SongService, VoteService } from '../../shared/services';
import { SongDetailPage } from '../song-detail';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage{

	isAdmin$ = this.auth.isAdmin();
	playing$ = this.songService.playing$;
	score$ = this.voteService.score$;
	title$ = this.playing$.map(song => song ? `${song.order}. ${song.country.name}` : '');

	constructor(
		private auth: AuthService,
		private songService: SongService,
		private voteService: VoteService,
		private app: App,
		private alertController: AlertController,
		private toastController: ToastController
	) { }

	showDetails() {
		this.app.getRootNav().push(SongDetailPage, {
			song: this.songService.playing()
		});
	}

	vote(score: number) {
		this.voteService.vote(score);

		const song = this.songService.playing();

		const points = 'point' + (score === 1 ? '' : 's');

		const toast = this.toastController.create({
			message: `${score} ${points} for ${song.country.name}`,
			duration: 3000,
			position: 'bottom'
		});

		toast.present();
	}

	nextSong() {
		const nextSong = this.songService.findNextsong();

		let message: string;
		if (nextSong) {
			message = `Proceed to <strong>${nextSong.title}</strong> (${nextSong.country.name})?`;
		} else {
			message = `This was the last song. End the voting?`;
		}

		const alert = this.alertController.create({
			title: 'Proceed',
			message,
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'OK',
					handler: () => {
						this.songService.next();
					}
				}
			]
		});

		alert.present();
	}
}
