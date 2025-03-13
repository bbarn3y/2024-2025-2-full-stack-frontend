import {Component, ElementRef, ViewChild} from '@angular/core';
import {NzCardComponent, NzCardModule} from 'ng-zorro-antd/card';
import {Character, CharacterClass} from '../../_models/character';
import {CommonModule} from '@angular/common';
import {NzInputModule} from 'ng-zorro-antd/input';

@Component({
  selector: 'app-lobby',
  imports: [
    CommonModule,
    NzCardModule,
    NzInputModule
  ],
  standalone: true,
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.less'
})
export class LobbyComponent {
  @ViewChild('searchInput') searchInputEl!: ElementRef;

  characters: Character[] = this.generateCharacters();
  filteredCharacters: Character[] = [...this.characters];

  generateCharacters(): Character[] {
    return [
      new Character('Mage Máté', CharacterClass.MAGE, 5, '/assets/characters/mage.webp'),
      new Character('Rogue Robi', CharacterClass.ROGUE, 9, '/assets/characters/rogue.webp'),
      new Character('Shaman Sanyi', CharacterClass.SHAMAN, 5),
    ];
  }

  searchCharacters(query: string) {
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(query.toLowerCase()));
  }

}
