import { Component } from '@angular/core';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterService} from '../../_services/router.service';
import {NzIconService} from 'ng-zorro-antd/icon';
import {LockOutline, UserOutline} from '@ant-design/icons-angular/icons';
import {ClientService} from '../../_services/client.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private clientService: ClientService,
              private fb: FormBuilder,
              private iconService: NzIconService,
              private routerService: RouterService) {
    this.iconService.addIcon(LockOutline, UserOutline);
    this.loginForm = this.fb.group({
      mail: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.clientService.login().subscribe((response) => {
        console.log(response);
        this.routerService.routeToLobby();
      })
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsDirty();
        control.updateValueAndValidity();
      })
    }
  }

}
