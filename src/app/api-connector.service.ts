import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiList } from './enum/api-list';
import { AbilityScore } from './enum/ability-score';
import { Equipment } from './enum/equipment';

@Injectable()
export class ApiConnectorService {

  constructor( private http: HttpClient ) { }

  tempUrl: string = 'https://cors-anywhere.herokuapp.com/https://dnd5eapi.co/api';

  // getAbilityScoreList(): Observable<ApiList> {
  //   return this.http.get<ApiList>(this.tempUrl);
  // }

  // getAbilityScoreDetails(abilityScore: string): Observable<AbilityScore> {
  //   return this.http.get<AbilityScore>(this.tempUrl);
  // }

  getEqDetails(item: string) {
    return this.http.get<Equipment>(`${this.tempUrl}/equipment/${item}`);
  }

}