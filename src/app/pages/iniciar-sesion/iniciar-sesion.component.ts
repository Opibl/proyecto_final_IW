import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import{DatosFormulario} from '../../datos-formulario';
import{ServicioService} from '../../servicio.service';
import { Router } from '@angular/router';
import {Usuarios} from '../../usuarios';
import { LoginService } from '../../login.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {

  formulario:FormGroup;
  email:AbstractControl;
  contraseña:AbstractControl;
  nologin = true;
  siteKey:string;

  Lista1:any;
  Lista2:Array<DatosFormulario> = [];
  Lista3:Array<DatosFormulario> = [];

  constructor(public fb:FormBuilder,private servicio:ServicioService,private ruta:Router,private login:LoginService, private cookie:CookieService) { 
    this.formulario = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      contraseña:['',[Validators.required]],
      recaptcha: ['', Validators.required]
      
    });
    this.email = this.formulario.controls["email"];
    this.contraseña = this.formulario.controls["contraseña"];
    this.siteKey = '6LczEFsbAAAAALSxVf7D9hyJjhxNqGjCc91hWvfD';
  }

  ngOnInit(): void {
    
  }


  Crear(){
    
    let log:string = "";

    this.cookie.put('esta',"aca");
    let persona:Usuarios={
      email:this.formulario.get('email')?.value,
      contraseña:this.formulario.get('contraseña')?.value,
    };
    
    this.servicio.guardarDatos(persona).subscribe(datos=>{
      if(datos.length > 0){
        log = "ok";
        this.Lista1 = datos[0];
        this.login.recibirDatos(this.Lista1);
        this.nologin = false;
        alert("has iniciado sesion correctamente");
        localStorage.setItem("datos", JSON.stringify(datos));
        localStorage.setItem("login",log);
        localStorage.setItem("email",JSON.stringify(datos[0].email))
        window.location.assign("");
        this.ruta.navigate(['/']);
      
      }
      else{
        console.log(datos);
        log = "no";
        localStorage.setItem("login",log);
        alert("usuario incorrecto");
      }
      
      this.login.login(this.nologin);
    });
    
  }

}
