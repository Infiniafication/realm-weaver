import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CoreService } from '../core.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor( private coreService: CoreService ) { }

  ngOnInit() {
  }

  itemForm = new FormGroup({
    itemName: new FormControl(''),
  });


  getItemDetails() {
    console.warn(this.itemForm.value);

    this.coreService.getItemInKg(this.itemForm.value);
  }

}