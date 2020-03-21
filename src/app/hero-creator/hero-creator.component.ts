import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core.service';

@Component({
  selector: 'app-hero-creator',
  templateUrl: './hero-creator.component.html',
  styleUrls: ['./hero-creator.component.css']
})
export class HeroCreatorComponent implements OnInit {

  constructor( private coreService: CoreService ) { }

  ngOnInit() {
    this.coreService.initializeCore();
  }

}