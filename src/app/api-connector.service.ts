import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiList } from './enum/api-list';
import { AbilityScore } from './enum/ability-score';

@Injectable()
export class ApiConnectorService {

  constructor( private http: HttpClient ) { }

  tempUrl: string = 'http://dnd5eapi.co/api/ability-scores/';

  getAbilityScoreList(): Observable<ApiList> {
    return this.http.get<ApiList>(this.tempUrl);
  }

  getAbilityScoreDetails(abilityScore: string): Observable<AbilityScore> {
    return this.http.get<AbilityScore>(this.tempUrl);
  }

}