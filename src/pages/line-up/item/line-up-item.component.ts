import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Song } from '../../../shared/entities'

@Component({
	selector: 'line-up-item',
	templateUrl: 'line-up-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineUpItemComponent {
	@Input() song: Song;
	@Output() select = new EventEmitter();
}
