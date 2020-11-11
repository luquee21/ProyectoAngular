import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-editprovee',
  templateUrl: './editprovee.component.html',
  styleUrls: ['./editprovee.component.css']
})
export class EditproveeComponent implements OnInit {
  proveedor: any;
  id: string;
  provincias: string[] = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'IslasBaleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'];

  constructor(private proveedorService: ProveedoresService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params
      .subscribe(parametros => {
        this.id = parametros['id'];
        this.proveedorService.getProveedor(this.id).subscribe(presupuesto => this.proveedor = presupuesto)
      });
  }

  ngOnInit(): void {
    this.proveedor = ({
      nombre: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.minLength(10)]],
      cp: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required],
      tlf: ['', Validators.required],
      email: ['', Validators.required],
      contacto: ['', Validators.required]

    });
  }

  onSubmit() {
    this.proveedor = this.saveProveedor();
    this.proveedorService.putProveedor(this.proveedor, this.id).subscribe(newpre => { this.router.navigate(['/proveedores']) })
  }
  saveProveedor() {
    const savePresupuesto = {
      nombre: this.proveedor.get('nombre').value,
      cif: this.proveedor.get('cif').value,
      direccion: this.proveedor.get('direccion').value,
      cp: this.proveedor.get('cp').value,
      localidad: this.proveedor.get('localidad').value,
      provincia: this.proveedor.get('provincia').value,
      tlf: this.proveedor.get('telefono').value,
      email: this.proveedor.get('email').value,
      contacto: this.proveedor.get('contacto').value
    };
    return savePresupuesto;
  }

}
