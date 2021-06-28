import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../../carrito.service';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  cantProducts:any;
  nologin:boolean = true;
  datos:any = [];
  logeado:any;
  nombre:string = '';
  nombreUsuario:any = [];
  logeadoAdmin:any;

  constructor(private carrito:CarritoService,private login:LoginService,private ruta:Router) { }

  ngOnInit(): void {
    this.logeado = localStorage.getItem("login");
    this.nologin = this.login.recibirResultadoLogin();
    if(this.logeado == 'ok'){
      this.datos = localStorage.getItem("datos");
      this.nombreUsuario = JSON.parse(this.datos);
      this.nombre = this.nombreUsuario[0].nombres;
      
      console.log("dato del locas storage",this.datos);
    }

    this.logeadoAdmin = localStorage.getItem("loginAdmin");
    //this.cantProducts = this.carrito.recibircantidadProd();
  }

  cerrarSesion(){
    localStorage.removeItem("login");
    localStorage.removeItem("datos");
    localStorage.removeItem("email");
  }

  cerrarSesionAdmin(){
    localStorage.removeItem("loginAdmin");
  }

  verPerfil(){
    this.ruta.navigate(['/perfil']);
  }

}
