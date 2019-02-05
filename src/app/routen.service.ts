import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Route } from './route';
import { Frage } from './frage';
import { Antwort } from './antwort';


@Injectable({
  providedIn: 'root'
})
export class RoutenService {

  constructor(private httpClient: HttpClient) { }

  readonly ROOT_URL = 'http://localhost:8080/admin/resources/schnitzel';
  result: Route[];
  routenName = '';
  @Output() change = new EventEmitter<string>();

  // ROUTEN
  retrieveAllRouten(): Promise<Route[]> {
    return this.httpClient.get<Route[]>(this.ROOT_URL + '/routen').toPromise();
  }

  create(route: Route): Promise<any> { // Pfad muss man noch anpassen?
    return this.httpClient.post(this.ROOT_URL, route).toPromise();
  }

  update(route: Route): Promise<any> {
    return this.httpClient.put(this.ROOT_URL + '/update/' + route.id, route).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.httpClient.delete<Route>(this.ROOT_URL + '/delete/' + id).toPromise();
  }

  retrieve(id: number): Promise<any> {
    return this.httpClient.get(this.ROOT_URL + '/routen/' + id).toPromise();
  }

  setRouteName(route: Route) {
    this.routenName = route.name;
    this.change.emit(route.name);
  }

  getRouteName() {
    return this.routenName;
  }

  // FRAGEN
  retrieveFragenZuRoute(id: number): Promise<any> {
    return this.httpClient.get(this.ROOT_URL + '/fragen/routeId/' + id).toPromise();
  }

  createFrage(frage: Frage): Promise<any> {
    return this.httpClient.post(this.ROOT_URL, frage).toPromise(); // Pfad muss noch angepasst werden
  }

  updateFrage(frage: Frage): Promise<any> {
    return this.httpClient.put(this.ROOT_URL + '/fragen/update/' + frage.id, frage).toPromise();
  }

  deleteFrage(id: number): Promise<any> {
    return this.httpClient.delete<Route>(this.ROOT_URL + '/fragen/delete/' + id).toPromise();
  }

  retrieveFrage(id: number): Promise<any> {
    return this.httpClient.get(this.ROOT_URL + '/fragen/' + id).toPromise();
  }

  // ANTWORTEN
  retrieveAntwortenZuFrage(id: number): Promise<any> {
    return this.httpClient.get(this.ROOT_URL + '/antworten/fragenId/' + id).toPromise();
  }

  createAntwort(antwort: Antwort): Promise<any> {
    return this.httpClient.post(this.ROOT_URL, antwort).toPromise(); // Pfad muss noch angepasst werden
  }

  updateAntwort(antwort: Antwort): Promise<any> {
    return this.httpClient.put(this.ROOT_URL + '/antworten/update/' + antwort.id, antwort).toPromise();
  }

  deleteAntwort(id: number): Promise<any> {
    return this.httpClient.delete<Route>(this.ROOT_URL + '/antworten/delete/' + id).toPromise();
  }

  retrieveAntwort(id: number): Promise<any> {
    return this.httpClient.get(this.ROOT_URL + '/antworten/' + id).toPromise();
  }

}
