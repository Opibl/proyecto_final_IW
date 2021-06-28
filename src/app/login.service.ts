import { Injectable } from '@angular/core';
import { ServicioService } from './servicio.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  listaDatos:any;

  constructor(private servicio:ServicioService) { }

  Estenologin = true;

  login(nologin:boolean):boolean
  {
    this.Estenologin = nologin;
    return  this.Estenologin;
  }

  recibirResultadoLogin(){
    return this.Estenologin;
  }

  recibirDatos(lista:any){
    this.listaDatos = lista;
    console.log("acaaaa",this.listaDatos);
  }

  datos(){
    return this.listaDatos;
  }
}
