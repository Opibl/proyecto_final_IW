import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DatosFormulario} from '../app/datos-formulario';
import { Usuarios } from './usuarios';
import{UsuariosRegistrados} from './usuarios-registrados'
import{Recuperar} from './recuperar';
import { Admin } from './admin';
import { Productos } from './productos';
import {environment} from '../environments/environment';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import { ProductosPedidos } from './productos-pedidos';




@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servidor = "http://127.0.0.1:3030/";

  constructor(private servicio:HttpClient) { }

  Consultar():Observable<any>{

    return this.servicio.get(`${this.servidor}`);
   
  }
  
  guardarDatos(persona:Usuarios):Observable<any>{
    //console.log(persona);
    return this.servicio.post(`${this.servidor}iniciarsesion`,persona);
  }

  guardarDatosRegistro(persona:UsuariosRegistrados):Observable<any>{
    console.log(persona);
    return this.servicio.post(`${this.servidor}registrarse`,persona);
  }

  RecuperarContraseña(persona:Recuperar):Observable<any>{
    console.log(persona);
    return this.servicio.post(`${this.servidor}recuperarContrasena`,persona);
  }
  
  guardarDatosAdmin(persona:Admin):Observable<any>{
    //console.log(persona);
    return this.servicio.post(`${this.servidor}inicioAdmin`,persona);
  }

  reporteUsuarios():Observable<any>{
    return this.servicio.get(`${this.servidor}reportes`);
  }

  reporteProductos():Observable<any>{
    return this.servicio.get(`${this.servidor}reporteProductos`);
  }

  terminarPedido(productos:Array<ProductosPedidos>):Observable<any>{
    //console.log(persona);
    return this.servicio.post(`${this.servidor}carritoCompras2`,productos);
  }


  datosPerfil(persona:any):Observable<any>{

    return this.servicio.post(`${this.servidor}perfil`,persona);
   
  }

  comentarios(comentarios:any):Observable<any>{

    return this.servicio.post(`${this.servidor}carritoCompras`,comentarios);
   
  }

  
  Comentarios():Observable<any>{

    return this.servicio.get(`${this.servidor}productos:id`);
   
  }
  
}
