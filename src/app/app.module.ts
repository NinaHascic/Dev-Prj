import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutenListeComponent } from './routen-liste/routen-liste.component';
import { RouteHinzufuegenComponent } from './route-hinzufuegen/route-hinzufuegen.component';
import { SchnitzelComponent } from './schnitzel.component';
import { FragenHinzufuegenComponent } from './fragen-hinzufuegen/fragen-hinzufuegen.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteBearbeitenComponent } from './route-bearbeiten/route-bearbeiten.component';
import { FragenBearbeitenComponent } from './fragen-bearbeiten/fragen-bearbeiten.component';
import { RoutenListeViewComponent } from './routen-liste-view/routen-liste-view.component';
import { RouteBearbeitenViewComponent } from './route-bearbeiten-view/route-bearbeiten-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutenListeComponent,
    RouteHinzufuegenComponent,
    SchnitzelComponent,
    FragenHinzufuegenComponent,
    RouteBearbeitenComponent,
    FragenBearbeitenComponent,
    RoutenListeViewComponent,
    RouteBearbeitenViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
