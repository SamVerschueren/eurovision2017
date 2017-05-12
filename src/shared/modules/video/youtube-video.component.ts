import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'youtube-video',
	templateUrl: 'youtube-video.component.html',
	styles: [
		`
			:host {
				position: relative;
				padding-bottom: 56.25%; /* 16:9 */
				padding-top: 25px;
				height: 0;
				background-color: black;
				display: block;
			}

			iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class YouTubeVideoComponent {
	videoUrl: SafeResourceUrl;

	constructor(
		private sanitizer: DomSanitizer
	) { }

	@Input() set src(value: string) {
		// TODO remove sanitizer and use CSP to fix this
		this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
	}
}
