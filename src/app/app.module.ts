import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelAdministradorComponent } from './components/Administrador/panel-administrador/panel-administrador.component';
import { ListadoUsuariosAdminComponent } from './components/Administrador/listado-usuarios-admin/listado-usuarios-admin.component';
import { PerfilesUsuariosComponent } from './components/Usuarios/perfiles-usuarios/perfiles-usuarios.component';
import { ListadoUsuariosComponent } from './components/Usuarios/listado-usuarios/listado-usuarios.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelAdministradorComponent,
    ListadoUsuariosAdminComponent,
    PerfilesUsuariosComponent,
    ListadoUsuariosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
