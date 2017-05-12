import { Injectable } from '@angular/core';

import { Song } from '../entities';

@Injectable()
export class CacheService {

	cache(song: Song) {
		this.loadImage(`https://eurovision.tv/img/hearts/${song.country.code}.svg`);
		this.loadImage(song.picture);
	}

	private loadImage(url: string) {
		const image = new Image();
		image.src = url;
	}
}
