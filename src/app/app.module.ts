import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApiConnectorService } from './api-connector.service';
import { CoreService } from './core.service';
import { HeroCreatorComponent } from './hero-creator/hero-creator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
  declarations: [ AppComponent, HelloComponent, HeroCreatorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiConnectorService, CoreService]
})
export class AppModule { }
