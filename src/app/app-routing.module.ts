import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';



const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores',  component: ProveedoresComponent},
  { path: 'addprovee', component: AddproveeComponent },
  { path: 'addpres', component: AddpresComponent},
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'editpres/:id', component: EditpresComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: InicioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
