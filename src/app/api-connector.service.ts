import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiList } from './enum/api-list';

@Injectable()
export class ApiConnectorService {

  constructor( private http: HttpClient ) { }

  tempUrl: string = 'http://dnd5eapi.co/api/ability-scores/';

  getAbilityScoreList() {
    return this.http.get<ApiList>(this.tempUrl);
  }

}