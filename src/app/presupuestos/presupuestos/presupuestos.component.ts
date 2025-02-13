import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];
  charged : boolean = false;

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        for (const id$ in presupuestos) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
        setTimeout(()=>{
          this.charged = true;
        },1500);
      })
  }

  ngOnInit(): void {
  }

  eliminarPresupuesto(id$) {
    this.presupuestosService.delPresupuesto(id$).subscribe(res => {
      this.presupuestos = [];
      this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
        for (const id$ in presupuestos) { const p = presupuestos[id$]; p.id$ = id$; this.presupuestos.push(presupuestos[id$]); }
      })
    });
  }
}
