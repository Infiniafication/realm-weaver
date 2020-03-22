import { Cost } from './cost';
import { NamedApiResource } from './named-api-resource';

export class Equipment {
  _id: string;
  index: string;
  name: string;
  equipment_category: string;
  weapon_category: string;
  weapon_range: string;
  category_range: string;
  cost: Cost;
  damage: object;
  range: object;
  weight: string;
  properties: NamedApiResource;
  url: string;
}