import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { CoreService } from '../core.service';
import { Equipment } from '../enum/equipment';

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

  result: Equipment;

  getItemDetails() {
    console.warn(this.itemForm.value);

    this.result = this.coreService.getItemInKg(this.itemForm.value.itemName).subscribe((data) => {
      this.result = data; 
    });
  }

}