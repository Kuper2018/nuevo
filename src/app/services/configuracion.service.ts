import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import "rxjs/Rx";

import {Configuracion} from '../configuracion';


@Injectable()
export class ConfiguracionService {

  constructor(private http: HttpClient) { }
   domain : string = "http://localhost:3000"; // DE DONDE VIEENN LOS DATOS

  getConfiguracion(){
   return this.http.get<Configuracion[]>(`${this.domain}/api/configuracion`)
    .map(res => res);
  }

  addConfiguracion(newConfiguracion : Configuracion){
     return this.http.post<Configuracion>(`${this.domain}/api/configuracion`, newConfiguracion)
    .map(res => res);
  }

 
  deleteConfiguracion(id ){
     return this.http.delete<Configuracion>(`${this.domain}/app/Configuracion/${id}`)
      .map (res => res );
  }

  updateConfiguracion(newConfiguracion){
    return this.http.put(`${this.domain}/api/Configuracion/${newConfiguracion.id}`,newConfiguracion)
    .map (res => res );
  }

}
