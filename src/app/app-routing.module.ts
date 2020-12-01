import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelAdministradorComponent } from './components/Administrador/panel-administrador/panel-administrador.component';
import { ListadoUsuariosComponent } from './components/Usuarios/listado-usuarios/listado-usuarios.component';

const routes: Routes = [

  {path: 'listado-usuarios',component: ListadoUsuariosComponent},
  {path: 'panel-administrador', component: PanelAdministradorComponent},
  { path: '', pathMatch: 'full', redirectTo: 'listado-usuarios' },
  { path: '**', redirectTo: 'listado-usuarios' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
