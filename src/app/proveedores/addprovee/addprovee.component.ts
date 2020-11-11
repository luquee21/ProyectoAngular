import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;

  provincias: string[] = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'IslasBaleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'];
  constructor(private presupuestoService: ProveedoresService) {
    this.proveedor = {
      nombre: '', cif: '', direccion: '', cp: '', localidad: '', provincia: '', telefono: null, email: '', contacto: ''
    }
  }
  
  onSubmit() {
    this.proveedor = this.saveProveedor();
    this.presupuestoService.postProveedores( this.proveedor )
    .subscribe(newpres => {
    })
    this.formpro.reset();
    }
    
  ngOnInit(): void {
  }
  saveProveedor() {
    const saveProveedor = {
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
    return saveProveedor;
  }
}
