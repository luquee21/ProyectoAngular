import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';



const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores',  component: ProveedoresComponent},
  { path: 'addprovee', component: AddproveeComponent },
  { path: 'addpres', component: AddpresComponent},
  { path: '**', component: InicioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
