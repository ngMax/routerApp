import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTES_PROVIDER } from './app/app.routes';
import {UserDetailGaurd} from './app/user/user-detail.gaurd';
import { UserEditGaurd } from './app/user/user-edit.gaurd';
if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTES_PROVIDER, UserDetailGaurd, UserEditGaurd]);
