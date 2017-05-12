import { Directive, Input, HostBinding } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
	selector: '[background]'
})
export class BackgroundDirective {

	@HostBinding('class.background') backgroundClass = true;
	@Input() @HostBinding('style.background-size') backgroundSize = 'cover';
	@HostBinding('style.background-repeat') backgroundRepeat = 'no-repeat';
	@HostBinding('style.background-position') backgroundPosition = 'center center';
	@HostBinding('style.backgroundImage') backgroundImage: SafeStyle;
	filter: SafeStyle;

	constructor(
		private _sanitizer: DomSanitizer
	) { }

	@Input() set background(background: string) {
		this.backgroundImage = this._sanitizer.bypassSecurityTrustStyle(`url(${background})`);
	}
}
