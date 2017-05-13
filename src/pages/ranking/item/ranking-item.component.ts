import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'ranking-item',
	templateUrl: 'ranking-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RankingItemComponent {
	@Input() ranking: number;
	@Input() flag: string;
	@Input() title: string;
	@Input() artist: string;
	@Input() country: string;
	@Input() score: number;
	@Input() userScore: number;
	@Output() select = new EventEmitter();
}
