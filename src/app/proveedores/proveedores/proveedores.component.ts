import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  mensaje:string;
  proveedores: any;


  constructor(private presupuestosService: ProveedoresService) {
    this.presupuestosService.getProveedores()
    .subscribe(presupuestos => {
        for (const id$ in presupuestos) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.proveedores.push(presupuestos[id$]);
        }
      })
  }

  ngOnInit(): void {
  }

  eliminarPresupuesto(id$) {
    this.presupuestosService.delProveedor(id$).subscribe(res => {
      this.proveedores = [];
      this.presupuestosService.getProveedores().subscribe(presupuestos => {
        for (const id$ in presupuestos) { const p = presupuestos[id$]; p.id$ = id$; this.proveedores.push(presupuestos[id$]); }
      })
    });
  }
}
