import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterCardComponent} from './character-card/character-card.component';
import {CharacterListingComponent} from './character-listing/character-listing.component';
import {LobbyComponent} from './lobby.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzInputModule} from 'ng-zorro-antd/input';
import {RouterModule, Routes} from '@angular/router';
import {NzButtonComponent} from 'ng-zorro-antd/button';

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent
  },
  {
    path: '**',
    redirectTo: `/lobby`
  }
]

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterListingComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    NzButtonComponent,
    NzCardModule,
    NzInputModule,
    RouterModule.forChild(routes)
  ],
  exports: [

  ]
})
export class InnerModule { }
