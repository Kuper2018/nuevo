import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent }  from './dashboard/login/login.component';


//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ConfiguracionComponent } from './dashboard/inicio/configuracion/configuracion.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { PrincipalComponent } from './dashboard/inicio/principal/principal.component';
import { UsuariosComponent } from './dashboard/inicio/usuarios/usuarios.component';
import { RegistrarCComponent } from './dashboard/inicio/registrar-c/registrar-c.component';
import { BuscarCComponent } from './dashboard/inicio/buscar-c/buscar-c.component';
import { BuscarAComponent } from './dashboard/inicio/buscar-a/buscar-a.component';
import { NotificacionComponent } from './dashboard/inicio/notificacion/notificacion.component';
import { MihogarComponent } from './portal/mihogar/mihogar.component';
import { LoginHComponent } from './portal/mihogar/login-h/login-h.component';
import { CandidatoHComponent } from './portal/mihogar/candidato-h/candidato-h.component';
//import { InicioHComponent } from './portal/mihogar/candidato-h/inicio-h/inicio-h.component';
import { EmpleadorHComponent } from './portal/mihogar/empleador-h/empleador-h.component';
//import { IconsComponent } from './icons/icons.component';
//import {  AdminInicioComponent } from './dashboard/inicio/admin-inicio.component';
//import { AdminIncioModule } from './dashboard/inicio/admin-incio.module';
//import { AdminIncioModule } from './dashboard/inicio/admin-incio.module';
//import { BuscaravisoComponent } from './dashboard/inicio/buscaraviso/buscaraviso.component';
//import { AdminDashboardRoutes } from './dashboard/admin-dashboard.routing';
//import { IconsComponent } from './icons/icons.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';


const routes: Routes =[
  



   
  {path:'dashboard', component: DashboardComponent,   
  children:[
    {path:'login', component: LoginComponent,},
   // {path:'configuracion',  component: ConfiguracionComponent,},
    {path:'inicio',  component: InicioComponent,
       children:[
       {path:'', redirectTo:'principal',pathMatch:'full'},
        {path:'configuracion', component: ConfiguracionComponent,},
     
        {path:'principal', component: PrincipalComponent,},
        {path:'buscarA', component: BuscarAComponent,},
        {path:'buscarC', component: BuscarCComponent,},
        {path:'registro', component: RegistrarCComponent,},
         {path:'usuarios', component: UsuariosComponent,},
         {path:'notificacion', component: NotificacionComponent,},
     
        
       ]
  
  
  
      },



    {path:'**', redirectTo:'login',pathMatch:'full'}
           ]
           
 },

 {path:'mihogar', component: MihogarComponent,    
 children:[
  {path:'login', component: LoginHComponent,},    
  {path:'candidato', component: CandidatoHComponent,}, 
  {path:'empleador', component: EmpleadorHComponent,}, 
  
  
  

  {path:'**', redirectTo:'login',pathMatch:'full'}
    ]
 },



// {path:'**', component: DashboardComponent,},
 
{path:'',  component: ConfiguracionComponent,},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
