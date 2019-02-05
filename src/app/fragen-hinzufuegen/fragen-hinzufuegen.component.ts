import { Antwort } from './../antwort';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Frage } from '../frage';
import { RoutenService } from './../routen.service';

declare var ol: any;

@Component({
  selector: 'app-fragen-hinzufuegen',
  templateUrl: './fragen-hinzufuegen.component.html',
  styles: []
})
export class FragenHinzufuegenComponent implements OnInit {
  @Output() okFrage = new EventEmitter<Frage>();
  @Output() cancel = new EventEmitter();

  routeId: number; // muss im hintergrund richtig gesetzt werden
  routenName: String; // für überschrift der Frage

  frage: Frage;
  antwort: Antwort;

  latitude: number;
  longitude: number;

  map: any;

  constructor(private routenService: RoutenService) { }

  ngOnInit() {
    this.showMap();
  }



  showMap() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([16.30231, 48.18101]),
        zoom: 18
      })
    });
  }

  startAddingFragen() {
    this.frage = new Frage();
  }

  finishAddingFrage() {
    this.routenService.createFrage(this.frage).then(
      () => {
        this.okFrage.emit(this.frage);
        this.frage = null;
      }
    );
  }
  finishWithCancel() {
    this.cancel.emit();
    this.frage = null;
  }


}
