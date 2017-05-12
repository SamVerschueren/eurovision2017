import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'score-card',
	templateUrl: 'score-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreCardComponent {
	scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	@Input() score: number;
	@Output() vote = new EventEmitter<number>();
}
