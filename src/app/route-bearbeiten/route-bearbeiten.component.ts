import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoutenService } from './../routen.service';
import { Route } from '../route';

@Component({
  selector: 'app-route-bearbeiten',
  templateUrl: './route-bearbeiten.component.html',
  styles: []
})
export class RouteBearbeitenComponent implements OnInit {

  @Output() ok = new EventEmitter<Route>();
  @Output() cancel = new EventEmitter();
  route: Route;
  routeId: number; // muss im hintergrund richtig gesetzt werden
  routenName: String; // für überschrift der Frage
  constructor(private routenService: RoutenService) { }

  ngOnInit() {
    console.log('Route bearbeiten aktiv');
  }

  editRoute(id: number): void {
    console.log('start editing route' + id);
    this.routenService.retrieve(id).then(
      route => this.route = route
    );
  }


  finishWithOk() {
    this.routenService.update(this.route);
    this.route = null;
  }

  finishWithCancel() {
    this.cancel.emit();
    this.route = null;
  }

}
