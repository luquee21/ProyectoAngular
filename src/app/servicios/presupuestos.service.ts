import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  presURL = 'https://comprasapp-83618.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-83618.firebaseio.com/presupuestos'
  constructor(private http: HttpClient) { }
  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newpres)
      .lift(res => {
        console.log(res.json());
        2
        return res.json();
      })
  }

  getPresupuestos() {
    return this.http.get(this.presURL).lift(res => res.json());
  }

  getPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
      .lift(res => res.json());
  }

  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, newpre)
      .lift(res => {
        console.log(res.json());
        return res.json();
      })
  }

}
