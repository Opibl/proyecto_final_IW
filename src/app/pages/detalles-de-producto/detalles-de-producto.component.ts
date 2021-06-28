import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicioService} from '../../servicio.service';
import{Productos} from '../../productos';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalles-de-producto',
  templateUrl: './detalles-de-producto.component.html',
  styleUrls: ['./detalles-de-producto.component.scss']
})
export class DetallesDeProductoComponent implements OnInit {

  ruta2:any;
  id:number = 0;
  lista:Array<Productos> = [];
  nologin = true;
  listaComentarios:any = [];

  constructor(private ruta:ActivatedRoute, private servicio:ServicioService,config:NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.ruta2 = this.ruta.params.subscribe(parametros=>{
      this.id = parametros['id'];
    });

    this.servicio.Consultar().subscribe(datos=>{
      for(let i = 0 ; i < datos.length ; i++){
        if(datos[i]._id == this.id){
          this.lista.push(datos[i]);
        }
      }
    });

    this.servicio.Comentarios().subscribe(datos =>{
      for(let i = 0 ; i < this.lista.length ;i++){
        for(let j = 0 ; j < datos.length ;j++){
          if(this.lista[i].nombre == datos[j].nombre){
            this.listaComentarios.push(datos[j]);
          }
        }
        
      }
    });
    
    console.log("lista de comentarios",this.listaComentarios)
  }

}
