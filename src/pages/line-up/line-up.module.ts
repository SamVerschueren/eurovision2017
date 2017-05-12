import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';
import { LineUpPage } from './line-up';
import { LineUpListComponent } from './list/line-up-list.component';
import { LineUpItemComponent } from './item/line-up-item.component';

@NgModule({
	imports: [
		IonicModule,
		SharedModule
	],
	declarations: [
		LineUpPage,
		LineUpListComponent,
		LineUpItemComponent
	],
	entryComponents: [
		LineUpPage
	]
})
export class LineUpModule { }
