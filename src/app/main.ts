import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import '../operators';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
