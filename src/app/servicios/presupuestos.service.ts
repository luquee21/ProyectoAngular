import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  presURL = 'https://comprasapp-9fc31.firebaseio.com/presupuestos.json';
  constructor(private http: HttpClient) { }
  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    1
    return this.http.post(this.presURL, newpres, { headers })
      .map(res => {
        console.log(res.json());
        2
        return res.json();
      })
  }
}
