import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {CharacterCardComponent} from './character-card/character-card.component';
import {CharacterListingComponent} from './character-listing/character-listing.component';
import {LobbyComponent} from './lobby.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzInputModule} from 'ng-zorro-antd/input';
import {RouterModule, Routes} from '@angular/router';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {CharacterNamePipe} from '../../_pipes/character.name.pipe';
import {SelectedCharacterDirective} from '../../_directives/selected-character.directive';
import {NzIconModule} from 'ng-zorro-antd/icon';

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
    CharacterNamePipe,
    LobbyComponent,
    SelectedCharacterDirective
  ],
  imports: [
    CommonModule,
    NzButtonComponent,
    NzCardModule,
    NzIconModule,
    NzInputModule,
    NzSkeletonModule,
    RouterModule.forChild(routes)
  ],
  exports: [

  ],
  providers: [
    DatePipe
  ]
})
export class InnerModule { }
