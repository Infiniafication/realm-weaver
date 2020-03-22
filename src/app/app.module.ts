import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiConnectorService } from './api-connector.service';
import { CoreService } from './core.service';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, ],
  declarations: [ AppComponent, HelloComponent, ItemsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiConnectorService, CoreService]
})
export class AppModule { }
