import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../_services/user.service';
import {RouterService} from '../_services/router.service';

export const privateGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = inject(UserService).isLoggedIn;
  if (!isLoggedIn) {
    inject(RouterService).routeToLogin();
  }
  return isLoggedIn;
};
