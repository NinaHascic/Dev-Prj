import { RoutenService } from './../routen.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Route } from './../route';

@Component({
  selector: 'app-routen-liste',
  templateUrl: './routen-liste.component.html',
  styles: []
})
export class RoutenListeComponent implements OnInit {

  routen: Route[];
  @Output() private add = new EventEmitter();
  @Output() private update = new EventEmitter();
  constructor(private routenService: RoutenService) { }



  getAllRouten() {
    this.routenService.retrieveAllRouten()
    .then(routen => this.routen = routen);
  }

  ngOnInit() {
    this.getAllRouten();
  }

  deleteRoute(route: Route) {
    if (confirm('Wollen Sie diese Route wirklich löschen?')) {
      this.routenService.delete(route.id)
      .then(() => this.getAllRouten());
    }
  }

  createRoute(route: Route) {
    this.routenService.create(route);
  }

  private addRoute() {
    this.add.emit();
  }

  updateRoute(route: Route) {
    console.log('Update starten von ' + route.name);
    this.update.emit(route.id);
  }



}
