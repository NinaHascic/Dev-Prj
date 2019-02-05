import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routen-liste-view',
  template: `
    <app-routen-liste #list (update)="input.editRoute($event)"></app-routen-liste>
    <app-route-bearbeiten #input (ok)="list.getAllRouten()"></app-route-bearbeiten>
  `,
  styles: []
})
export class RoutenListeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
