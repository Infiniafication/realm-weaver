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
    // this.apiConnector.getAbilityScoreList().subscribe((data) => { 
    //     data.results.reduce();
    //   }
    // );

    for(let item in AbilityScoreType) {
      this.apiConnector.getAbilityScoreDetails(item).subscribe((data) => { 
          this._abilityScores.push(data); // this is so wrong ~~ need to redo
        }
      );
    }
    return true;
  }

  get abilityScores(): AbilityScore[] {
    return this.abilityScores;
  }
}