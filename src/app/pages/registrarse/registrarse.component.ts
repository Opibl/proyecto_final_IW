import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import{DatosFormulario} from '../../datos-formulario';
import{ServicioService} from '../../servicio.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {UsuariosRegistrados} from '../../usuarios-registrados'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
  
})
export class RegistrarseComponent implements OnInit {
  formulario:FormGroup;
  nombres:AbstractControl;
  apellidos:AbstractControl;
  rut:AbstractControl;
  comuna:AbstractControl;
  contraseña:AbstractControl;
  email:AbstractControl;
  region:AbstractControl;
  direccion:AbstractControl;
  repetir:AbstractControl;
  

  Lista1:Array<DatosFormulario> = [];
  Lista2:Array<DatosFormulario> = [];
  Lista3:Array<DatosFormulario> = [];

  

  constructor(public fb:FormBuilder,private servicio:ServicioService,private ruta:Router) {
    this.formulario = this.fb.group({
      nombres:['',[Validators.required]],
      apellidos:['',[Validators.required]],
      rut:['',[Validators.required]],
      comuna:['',[Validators.required]],
      direccion:['',[Validators.required]],
      region:['',[Validators.required]],
      contraseña:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      repetir:['',[Validators.required]],
      
    });
    this.nombres = this.formulario.controls["nombres"];
    this.apellidos = this.formulario.controls["apellidos"];
    this.rut = this.formulario.controls["rut"];
    this.comuna = this.formulario.controls["comuna"];
    this.contraseña = this.formulario.controls["contraseña"];
    this.email = this.formulario.controls["email"];
    this.direccion = this.formulario.controls["direccion"];
    this.region = this.formulario.controls["region"];
    this.repetir = this.formulario.controls["repetir"];
  }

  ngOnInit(): void {
    
  }


  Crear(){

    
    
      let persona:UsuariosRegistrados={
        nombres:this.formulario.get('nombres')?.value,
        apellidos:this.formulario.get('apellidos')?.value,
        direccion:this.formulario.get('direccion')?.value,
        rut:this.formulario.get('rut')?.value,
        region:this.formulario.get('region')?.value,
        comuna:this.formulario.get('comuna')?.value,
        email:this.formulario.get('email')?.value,
        contraseña:this.formulario.get('contraseña')?.value,
      };
      
      
      
      /*if(this.servicio.recibirDatos()){
        alert("inicio correcto");
        this.ruta.navigate(['/']);
      }
      else{
        alert("inicio incorrecto");
      }
      */

      if(this.formulario.get('contraseña')?.value == this.formulario.get('repetir')?.value){
        this.servicio.guardarDatosRegistro(persona).subscribe(datos=>{
          console.log(datos);
        });
      }
      alert("registro correcto");
      window.location.assign("");
    
  }
    
 

}

