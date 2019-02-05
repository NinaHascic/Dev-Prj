import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schnitzel',
  template: `
    <app-route-hinzufuegen #inputRoute (okRoute)="liste.setListShown(false)"></app-route-hinzufuegen>
    <app-routen-liste #liste (add)="inputRoute.startAddingRoute()"></app-routen-liste>
    <app-fragen-hinzufuegen></app-fragen-hinzufuegen>
  `,
  styles: []
})
export class SchnitzelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
