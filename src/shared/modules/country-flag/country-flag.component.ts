import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
	selector: 'country-flag',
	template: '',
	styles: [
		`
		:host {
			background-repeat: no-repeat;
			background-position: center center;
			background-size: contain;
			display: block;
			width: 40px;
			height: 40px;
		}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryFlagComponent {

	@HostBinding('style.backgroundImage') backgroundImage: SafeStyle;

	constructor(
		private sanitizer: DomSanitizer
	) { }

	@Input() set code(value: string) {
		this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(https://eurovision.tv/img/hearts/${value}.svg`);
	}
}
