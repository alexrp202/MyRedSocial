import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelAdministradorComponent } from './components/Administrador/panel-administrador/panel-administrador.component';
import { ListadoUsuariosComponent } from './components/Usuarios/listado-usuarios/listado-usuarios.component';
import { MostrarUsuariosComponent } from './components/Usuarios/mostrar-usuarios/mostrar-usuarios.component';

const routes: Routes = [

  {path: 'mostrar-usuarios',component: MostrarUsuariosComponent},
  {path: 'panel-administrador', component: PanelAdministradorComponent},
  { path: '', pathMatch: 'full', redirectTo: 'mostrar-usuarios' },
  { path: '**', redirectTo: 'mostrar-usuarios' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
