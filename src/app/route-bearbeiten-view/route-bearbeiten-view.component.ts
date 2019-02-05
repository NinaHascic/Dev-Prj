import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-bearbeiten-view',
  template: `
    <app-route-bearbeiten #input (ok)="list.refresh()"></app-route-bearbeiten>
  `,
  styles: []
})
export class RouteBearbeitenViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
