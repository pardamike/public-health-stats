import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModuleModule } from './modules/material-module.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { StateSelectComponent } from './components/state-select/state-select.component';
import { StateInfoComponent } from './components/state-info/state-info.component';
import { StateGraphComponent } from './components/state-graph/state-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    StateSelectComponent,
    StateInfoComponent,
    StateGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModuleModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
