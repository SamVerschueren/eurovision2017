import { Country } from './country';
import { Ref } from './ref';

export interface Song extends Ref {
	country: Country;
	artist: {
		firstName: string;
		name: string;
		nickname: string;
	};
	order: number;
	title: string;
	video: string;
	picture: string;
	score?: number;
	userScore?: number;
}
