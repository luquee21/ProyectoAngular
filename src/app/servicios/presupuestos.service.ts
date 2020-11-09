
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  presURL = 'https://comprasapp-9fc31.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-9fc31.firebaseio.com/presupuestos';

  constructor(private http: HttpClient) { }
  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newpres, { headers })
      .map(res => {
        console.log(res);
        return res;
      })
  }

  getPresupuestos() {
    return this.http.get(this.presURL).map(res => res);
  }

  getPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
      .map(res => res);
  }

  putPresupuesto(presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, newpre, { headers })
      .map(res => {
        console.log(res);
        return res;
      })
  }

  delPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
     return this.http.delete(url).map(res => res);

  }
  
}
