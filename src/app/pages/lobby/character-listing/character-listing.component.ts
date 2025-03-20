import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Character, CharacterClass} from '../../../_models/character';
import {debounceTime, fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-character-listing',
  standalone: false,
  templateUrl: './character-listing.component.html',
  styleUrl: './character-listing.component.less'
})
export class CharacterListingComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput', { static: true }) searchInputEl!: ElementRef<HTMLInputElement>;

  characters: Character[] = this.generateCharacters();
  filteredCharacters: Character[] = [...this.characters];

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent<Event>(this.searchInputEl.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((ev: Event) => (ev.target as HTMLInputElement).value.trim())
      )
      .subscribe((query) => this.searchCharacters(query))
  }

  ngOnDestroy() {

  }

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
