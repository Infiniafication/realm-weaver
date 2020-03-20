import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiConnectorService } from './api-connector.service';
import { HomeComponent } from './home/home.component';
import { CoreService } from './core.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiConnectorService, CoreService]
})
export class AppModule { }
