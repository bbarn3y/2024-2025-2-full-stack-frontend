import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {LobbyComponent} from './pages/lobby/lobby.component';
import {privateGuard} from './_guards/private.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lobby',
    component: LobbyComponent,
    canActivate: [privateGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
