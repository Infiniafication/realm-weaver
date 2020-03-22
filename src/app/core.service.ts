import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiConnectorService } from './api-connector.service';
import { NamedApiResource } from './enum/named-api-resource';
import { AbilityScore, AbilityScoreType } from './enum/ability-score';

@Injectable()
export class CoreService {

  constructor( private apiConnector: ApiConnectorService ) { }

  _abilityScores: AbilityScore[];

  async initializeCore(): Promise<boolean> {
    return true;
  }

  getItemInKg() {
    
  }

  get abilityScores(): AbilityScore[] {
    return this.abilityScores;
  }
}