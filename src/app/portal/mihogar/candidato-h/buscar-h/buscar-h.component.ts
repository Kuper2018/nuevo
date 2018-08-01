import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-h',
  templateUrl: './buscar-h.component.html',
  styleUrls: ['./buscar-h.component.scss']
})
export class BuscarHComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  avisos = [
    {id:1, titulo:'Busco Niñera', descripcion:'Cama adentro' ,ciudad:'Santa-Cruz' },
    {id:2, titulo:'Busco Niñera', descripcion:'Cama afuera' ,ciudad:'Santa-Cruz' },
    {id:3, titulo:'Busco Niñera', descripcion:'por dia' ,ciudad:'Santa-Cruz' },
    {id:4, titulo:'Busco Niñera', descripcion:'mes' ,ciudad:'Santa-Cruz' },
    {id:5, titulo:'Busco Niñera', descripcion:'Cama adentro' ,ciudad:'Potosi' },
    {id:6, titulo:'Busco Niñera', descripcion:'Cama adentro' ,ciudad:'Sucre' },
    {id:7, titulo:'Busco Niñera', descripcion:'Cama adentro' ,ciudad:'Cochabamba' },
    {id:8, titulo:'Busco Niñera', descripcion:'Cama adentro' ,ciudad:'Pando' },
    {id:9, titulo:'Busco Niñera', descripcion:'Cama adentro' ,ciudad:'Beni' },
  ]

}
