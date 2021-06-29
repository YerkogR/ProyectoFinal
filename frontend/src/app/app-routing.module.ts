import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { HistorialMedicoComponent } from './components/historial-medico/historial-medico.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './screens/home/home.component';
import { VistaAdminComponent } from './screens/vista-admin/vista-admin.component';
import { VistaPacienteComponent } from './screens/vista-paciente/vista-paciente.component';
import { HeaderhomeComponent} from './components/headerhome/headerhome.component';
import { HeaderusuarioComponent} from './components/headerusuario/headerusuario.component';
import { HeaderadminComponent} from './components/headeradmin/headeradmin.component';
import { FooterComponent} from './components/footer/footer.component';
import { ReporteCitasComponent} from './components/reporte-citas/reporte-citas.component';
import { ReportePacienteComponent} from './components/reporte-paciente/reporte-paciente.component';
import{ EditarCitaComponent} from './components/editar-cita/editar-cita.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {path: 'vista-admin', component: VistaAdminComponent},
  {path: 'vista-paciente', component: VistaPacienteComponent},
  {path: 'iniciar-sesion', component: InicioSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'crear-cita', component: CrearCitaComponent},
  {path: 'historial-medico', component: HistorialMedicoComponent},
  {path: 'app-headerhome', component: HeaderhomeComponent},
  {path: 'app-headerusuario', component: HeaderusuarioComponent},
  {path: 'app-headeradmin', component: HeaderadminComponent},
  {path: 'app-footer', component: FooterComponent},
  {path: 'reporte-citas', component: ReporteCitasComponent},
  {path: 'reporte-paciente', component: ReportePacienteComponent},
  {path: 'editar-citas', component: EditarCitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
