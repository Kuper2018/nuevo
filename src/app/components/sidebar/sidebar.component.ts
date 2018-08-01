import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard/inicio/principal', title: 'Inicio',  icon: 'dashboard', class: '', },
    { path: '/dashboard/inicio/buscarA', title: 'Buscar Avisos',  icon:'search', class: '' },
    { path: '/dashboard/inicio/buscarC', title: 'Buscar Candidatos',  icon:'search', class: '' },
    { path: '/dashboard/inicio/registro', title: 'Registar Candidato',  icon:'library_books', class: '' },
    { path: '/dashboard/inicio/configuracion', title: 'Configuarcion',  icon:'build', class: '' },
    
    { path: '/dashboard/inicio/usuarios', title: 'Usuarios',  icon:'person', class: '' },
    { path: '/dashboard/inicio/notificacion', title: 'Notifications',  icon:'notifications', class: '' },
   //  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
