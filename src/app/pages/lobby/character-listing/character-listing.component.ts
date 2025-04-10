import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Character, CharacterClassDetails} from '../../../_models/character';
import {debounceTime, fromEvent, map} from 'rxjs';
import {CharacterService} from '../../../_services/character.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-character-listing',
  standalone: false,
  templateUrl: './character-listing.component.html',
  styleUrl: './character-listing.component.less',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CharacterListingComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput', { static: false }) searchInputEl!: ElementRef<HTMLInputElement>;

  characters: Character[] = [];
  filteredCharacters: Character[] = [...this.characters];
  isLoading = true;
  selectedCharacter?: Character;

  constructor(private characterService: CharacterService,
              private cdr: ChangeDetectorRef,
              private datePipe: DatePipe,
              private ngZone: NgZone) {
    // this.datePipe.transform();
  }


  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
      this.searchCharacters(this.searchInputEl?.nativeElement?.value ?? '');
      this.isLoading = false;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.addFilterEventListener()
      }, 0);
    });
  }

  ngOnDestroy() {

  }

  addFilterEventListener() {
    console.log(this);
    fromEvent<Event>(this.searchInputEl.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((ev: Event) => (ev.target as HTMLInputElement).value.trim())
      )
      .subscribe((query) => this.searchCharacters(query))
  }

  // generateCharacters(): Character[] {
  //   return [
  //     new Character('Mage Máté', CharacterClass.MAGE, 5, '/assets/characters/mage.webp'),
  //     new Character('Rogue Robi', CharacterClass.ROGUE, 9, '/assets/characters/rogue.webp'),
  //     new Character('Shaman Sanyi', CharacterClass.SHAMAN, 5),
  //   ];
  // }

  searchCharacters(query: string) {
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(query.toLowerCase()));
  }

  protected readonly CharacterClassDetails = CharacterClassDetails;
}
