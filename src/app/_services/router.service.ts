import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root' // Singleton service
})
export class RouterService {

  constructor(private router: Router) { }

  routeToLobby() {
    this.router.navigateByUrl('/lobby');
  }

  routeToLogin() {
    this.router.navigateByUrl('/login');
  }

}
