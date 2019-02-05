import { Antwort } from './../antwort';
import { Component, OnInit } from '@angular/core';
import { Frage } from '../frage';
import { RoutenService } from './../routen.service';

@Component({
  selector: 'app-fragen-bearbeiten',
  templateUrl: './fragen-bearbeiten.component.html',
  styles: []
})
export class FragenBearbeitenComponent implements OnInit {
  routeId: number; // muss im hintergrund richtig gesetzt werden
  routenName: String; // für überschrift der Frage

  frage: Frage;
  fragenZuRoute: Frage[];

  antwort: Antwort;
  antwortenZuFrage: Antwort[];

  latitude: number;
  longitude: number;

  constructor(private routenService: RoutenService) { }

  ngOnInit() {
  }

  getFragenByRouteId(routeId: number) {
    this.routenService.retrieve(routeId)
    .then(fragen => this.fragenZuRoute = fragen);
  }

  getAntwortenByFragenId(fragenId: number) {
    // TO DO
  }

}
