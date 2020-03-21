import { NamedApiResource } from './named-api-resource';

export class AbilityScore {
  _id: string;
  index: string;
  name: string;
  full_name: string;
  desc: string;
  skills: NamedApiResource;
  url: string;
}

export enum AbilityScoreType {
  STRENGTH = 'str',
  DEXTERITY = 'dex',
  CONSTITUTION = 'con',
  INTELLIGENCE = 'int',
  WISDOM = 'wis',
  CHARISMA = 'cha'
}
