import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../../shared/entities';

@Component({
	selector: 'line-up-list',
	templateUrl: 'line-up-list.component.html'
})
export class LineUpListComponent  {
	@Input() lineup: Song[];
	@Output() select = new EventEmitter<Song>();
}
