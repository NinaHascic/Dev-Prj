import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { Route } from '../route';
import { RoutenService } from './../routen.service';

declare var ol: any;
@Component({
  selector: 'app-route-hinzufuegen',
  templateUrl: './route-hinzufuegen.component.html',
  styles: []
})


export class RouteHinzufuegenComponent implements OnInit {
  @Output() okRoute = new EventEmitter<Route>();
  @Output() cancel = new EventEmitter();
  route: Route;
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

  startAddingRoute() {
    this.route = new Route();
  }

  finishAddingRoute() {
    this.routenService.create(this.route).then(
      () => {
        this.okRoute.emit(this.route);
        this.route = null;
      }
    );
  }

  finishWithCancel() {
    this.cancel.emit();
    this.route = null;
  }



}
