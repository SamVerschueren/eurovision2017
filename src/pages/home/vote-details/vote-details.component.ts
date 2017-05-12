import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Song } from '../../../shared/entities';

@Component({
	selector: 'vote-details',
	templateUrl: 'vote-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteDetailsComponent {
	@Input() song: Song;
	@Input() score: number;
	@Output() details = new EventEmitter();
	@Output() vote = new EventEmitter<number>();
}
