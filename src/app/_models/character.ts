export class Character {
  id: string;
  created: number;
  name: string;
  image?: string;
  characterClass: CharacterClass;
  maxHp: number;

  constructor(name: string, characterClass: CharacterClass, maxHp: number, image?: string) {
    this.id = Math.random().toString(36).substring(7);
    this.created = Date.now();
    this.name = name;
    this.image = image;
    this.characterClass = characterClass;
    this.maxHp = maxHp;
  }
}

export enum CharacterClass {
  MAGE = 'MAGE',
  ROGUE = 'ROGUE',
  SHAMAN = 'SHAMAN'
}

export interface CharacterClassDetail {
  color: 'blue' | 'black' | 'orange';
  maxHp: number;
}

/**
 * {
 *   MAGE: CharacterClassDetail,
 *   ROGUE: CharacterClassDetail,
 *   SHAMAN: CharacterClassDetail,
 * }
 */
/**
 * With Partial:
 * {
 *   MAGE?: CharacterClassDetail,
 *   ROGUE?: CharacterClassDetail,
 *   SHAMAN?: CharacterClassDetail,
 * }
 */
// export const CharacterClassDetails: Partial<{ [k in CharacterClass]: CharacterClassDetail }> = {
export const CharacterClassDetails: { [k in CharacterClass]: CharacterClassDetail } = {
  [CharacterClass.MAGE]: {
    color: 'blue',
    maxHp: 6
  },
  [CharacterClass.ROGUE]: {
    color: 'black',
    maxHp: 12
  },
  [CharacterClass.SHAMAN]: {
    color: 'orange',
    maxHp: 8
  },
};
