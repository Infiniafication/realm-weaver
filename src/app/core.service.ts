import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiConnectorService } from './api-connector.service';
import { Equipment } from './enum/equipment';
// import { NamedApiResource } from './enum/named-api-resource';
// import { AbilityScore, AbilityScoreType } from './enum/ability-score';

@Injectable()
export class CoreService {

  constructor( private apiConnector: ApiConnectorService ) { }

  getItemInKg(item: string): Equipment {
    let itemDetails: Equipment;
    this.apiConnector.getEqDetails(item).subscribe((data) => { 
      console.log(data);
      itemDetails = data; 
    });

    return itemDetails;
  }

  // _abilityScores: AbilityScore[];
  // get abilityScores(): AbilityScore[] {
  //   return this.abilityScores;
  // }

  // async initializeCore(): Promise<boolean> {
  //   return true;
  // }
}