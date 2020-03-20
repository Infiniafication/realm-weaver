import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiConnectorService } from './api-connector.service';
import { NamedApiResource } from './enum/named-api-resource';
import { AbilityScore } from './enum/ability-score';

@Injectable()
export class CoreService {

  constructor( private apiConnector: ApiConnectorService ) { }

  abilityScoreList: AbilityScore;

  initializeCore() {
    this.apiConnector.getAbilityScoreList().subscribe((data) => { 
        data.results.reduce();
      }
    );
  }
}