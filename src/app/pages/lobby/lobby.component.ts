import {
  Component,
} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {RouterService} from '../../_services/router.service';

@Component({
  selector: 'app-lobby',
  standalone: false,
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.less'
})
export class LobbyComponent {

  constructor(public routerService: RouterService,
              public userService: UserService) {}

}
