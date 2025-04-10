import { Injectable } from '@angular/core';
import {Character, CharacterClass} from '../_models/character';
import {delay, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  addCharacter(character: Character): void {}

  editCharacter(id: string, character: Character): void {

  }

  getCharacters(): Observable<Character[]> {
    const characters = [
      new Character('Mage Máté', CharacterClass.MAGE, 5, '/assets/characters/mage.webp'),
      new Character('Rogue Robi', CharacterClass.ROGUE, 9, '/assets/characters/rogue.webp'),
      new Character('Shaman Sanyi', CharacterClass.SHAMAN, 5),
    ];
    console.log(JSON.stringify(characters));
    // return of(characters).pipe(delay(1000));
    return this.http.get<Character[]>('https://mocki.io/v1/4e84e5f7-72e2-43da-88ac-1fda9bd83372')
  }

  removeCharacter(id: string): void {

  }
}
