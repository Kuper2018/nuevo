import { Component, OnInit } from '@angular/core';
import {Datos} from './Datos';
import { ConfiguracionService } from '../../../services/configuracion.service';
import { Configuracion } from '../../../configuracion';





@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent implements OnInit {

  modalidadesH = [
    {id:1 , Modalidad:'Medio tiempo'},
    {id:2 , Modalidad:'Tiempo completo'},
    {id:3 , Modalidad:'Semanal'},


  ]
 
  AddModalidad(){
    console.log('AHORA SI');
  }
  
  configuracion: Configuracion[];
  title : string;

  constructor(private configuracionService : ConfiguracionService) {
    this.configuracionService.getConfiguracion()
    .subscribe(configuracion => {
     this.configuracion = configuracion
    })
   }

   addConfiguracion(event){
       event.preventDefault(); // preventDefault -> es para cancelar la refrescacion
         const newConfiguracion: Configuracion = {
           title : this.title,
           isDone : false
          
         };
        this.configuracionService.addConfiguracion(newConfiguracion)
        .subscribe(configuracion => {
          this.configuracion.push(configuracion);
          console.log(this.configuracion);
          this.title= "";
        });
      }

      deleteConfiguracion(id){
        const response=  confirm('esta seguro que quiere eliminar? ')
        if(response){
          const configuracion = this.configuracion;
          this.configuracionService.deleteConfiguracion(id)
          .subscribe(data => {
             if(data.n == 1) {
               for(let i = 0; i< configuracion.length; i++){
                 if(configuracion[i]._id == id ) {
                   configuracion.splice(i,1);
                 }
               }
             }
          })

        }
       return;
      }


     updateConfiguracion(id,M){
       console.log(id,M);
     }   

  ngOnInit() {
  }


   
}
