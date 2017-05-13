import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'line-up-item',
	templateUrl: 'line-up-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineUpItemComponent {
	@Input() order: string;
	@Input() title: string;
	@Input() picture: string;
	@Input() userScore: number;
	@Input() country: { name: string, code: string };
	@Input() artist: { nickname: string };
	@Output() select = new EventEmitter();
}
