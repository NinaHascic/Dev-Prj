import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutenListeComponent } from './routen-liste/routen-liste.component';
import { RoutenListeViewComponent } from './routen-liste-view/routen-liste-view.component';
import { RouteHinzufuegenComponent } from './route-hinzufuegen/route-hinzufuegen.component';
import { RouteBearbeitenComponent } from './route-bearbeiten/route-bearbeiten.component';
import { FragenHinzufuegenComponent } from './fragen-hinzufuegen/fragen-hinzufuegen.component';

const routes: Routes = [
  {path: '', component: RoutenListeComponent},
  {path: 'routen', component: RoutenListeViewComponent},
  {path: 'createroute', component: RouteHinzufuegenComponent},
  {path: 'updateroute', component: RouteBearbeitenComponent},
  {path: 'createfragen', component: FragenHinzufuegenComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

