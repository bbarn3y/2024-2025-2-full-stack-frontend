import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, of, tap} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,
              private userService: UserService) { }

  login() {
    // return this.http.get<{ token: string, username: string }>('https://mocki.io/v1/dfddb9fa-d082-4bd7-b5f6-f17bf1d50c04');
    return of({
      token: 'Ugly little token',
      username: 'Ugly Ubul'
    }).pipe(
      delay(1000),
      tap((response) => {
        this.userService.saveSession(response);
      })
    );
  }
}
