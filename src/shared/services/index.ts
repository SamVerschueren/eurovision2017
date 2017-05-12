import { AuthService } from './auth.service';
import { SongService } from './song.service';
import { VoteService } from './vote.service';
import { CacheService } from './cache.service';

const APP_SERVICES = [
	AuthService,
	SongService,
	VoteService,
	CacheService
];

export { APP_SERVICES, AuthService, SongService, VoteService, CacheService }
