import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { Angular2BaseSixtyFourInputModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Angular2BaseSixtyFourInputModule);
