import { Pipe, PipeTransform } from '@angular/core';
import {Character} from '../_models/character';

@Pipe({
  name: 'characterName',
  standalone: false
})
export class CharacterNamePipe implements PipeTransform {

  transform(value: Character, separator: string = ',', ...args: unknown[]): string {
    if (value && value.name && value.name.split(' ')) {
      const split = value.name.split(' ');
      return `${split[1]}${separator} ${split[0]}`;
    }
    return value.name;
  }

}
