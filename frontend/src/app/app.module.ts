import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { VistaPacienteComponent } from './screens/vista-paciente/vista-paciente.component';
import { VistaAdminComponent } from './screens/vista-admin/vista-admin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { HistorialMedicoComponent } from './components/historial-medico/historial-medico.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { HeaderhomeComponent } from './components/headerhome/headerhome.component';
import { HeaderusuarioComponent } from './components/headerusuario/headerusuario.component';
import { HeaderadminComponent } from './components/headeradmin/headeradmin.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportePacienteComponent } from './components/reporte-paciente/reporte-paciente.component';
import { ReporteCitasComponent } from './components/reporte-citas/reporte-citas.component';
import { EditarCitaComponent } from './components/editar-cita/editar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VistaPacienteComponent,
    VistaAdminComponent,
    RegistroComponent,
    InicioSesionComponent,
    HistorialMedicoComponent,
    CrearCitaComponent,
    HeaderhomeComponent,
    HeaderusuarioComponent,
    HeaderadminComponent,
    FooterComponent,
    ReportePacienteComponent,
    ReporteCitasComponent,
    EditarCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
