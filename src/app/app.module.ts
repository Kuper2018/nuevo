import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';


import { LoginComponent } from './dashboard/login/login.component';
import { ConfiguracionComponent } from './dashboard/inicio/configuracion/configuracion.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { PrincipalComponent } from './dashboard/inicio/principal/principal.component';

import { UsuariosComponent } from './dashboard/inicio/usuarios/usuarios.component';
import { RegistrarCComponent } from './dashboard/inicio/registrar-c/registrar-c.component';
import { BuscarAComponent } from './dashboard/inicio/buscar-a/buscar-a.component';

import { BuscarCComponent } from './dashboard/inicio/buscar-c/buscar-c.component';
import { NotificacionComponent } from './dashboard/inicio/notificacion/notificacion.component';
import { MihogarComponent } from './portal/mihogar/mihogar.component';
import { OfidemComponent } from './portal/ofidem/ofidem.component';
import { LoginHComponent } from './portal/mihogar/login-h/login-h.component';
import { CandidatoHComponent } from './portal/mihogar/candidato-h/candidato-h.component';
import { MatTabsModule } from '@angular/material';
import { InicioHComponent } from './portal/mihogar/candidato-h/inicio-h/inicio-h.component';
//import { IconsComponent } from './icons/icons.component';
import {MatIconModule} from '@angular/material/icon';
import { EmpleadorHComponent } from './portal/mihogar/empleador-h/empleador-h.component';
import { BuscarHComponent } from './portal/mihogar/candidato-h/buscar-h/buscar-h.component';
import { AlertaHComponent } from './portal/mihogar/candidato-h/alerta-h/alerta-h.component';
import { CuentaHComponent } from './portal/mihogar/candidato-h/cuenta-h/cuenta-h.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ConfiguracionService } from './services/configuracion.service';
import {HttpClientModule} from '@angular/common/http';






@NgModule({
  imports: [
    BrowserAnimationsModule,

    FormsModule,
    MatTooltipModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
   //AgmCoreModule.forRoot({apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'})
    ],
  declarations: [
    AppComponent,
    LoginComponent,
 
   
  DashboardComponent,
   ConfiguracionComponent,
   InicioComponent, // este es igual al 1
   PrincipalComponent,
   UsuariosComponent,
    RegistrarCComponent,
   BuscarAComponent,
   BuscarCComponent,
   NotificacionComponent,
   MihogarComponent,
   OfidemComponent,
   LoginHComponent,
   CandidatoHComponent,
   InicioHComponent,
   EmpleadorHComponent,
   BuscarHComponent,
   AlertaHComponent,
   CuentaHComponent,
  // IconsComponent,
  
   


  ],
  providers: [ConfiguracionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
