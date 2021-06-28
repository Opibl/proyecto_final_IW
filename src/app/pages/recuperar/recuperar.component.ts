import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import { Recuperar } from '../../recuperar';
import{ServicioService} from '../../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent implements OnInit {

  formulario:FormGroup;
  nuevaContraseña:AbstractControl;
  email:AbstractControl;
  repetir:AbstractControl;

  constructor(public fb:FormBuilder,private servicio:ServicioService,private ruta:Router) { 

    this.formulario = this.fb.group({
      
      email:['',[Validators.required,Validators.email]],
      nuevaContraseña:['',[Validators.required]],
      repetir:['',[Validators.required]],
      
    });
    this.email = this.formulario.controls["email"];
    this.nuevaContraseña = this.formulario.controls["nuevaContraseña"];
    this.repetir = this.formulario.controls["repetir"];
  }

  ngOnInit(): void {
  }


  Crear(){
    let persona:Recuperar={
     
      email:this.formulario.get('email')?.value,
      nuevaContraseña:this.formulario.get('nuevaContraseña')?.value,

    };

    if(this.formulario.get('nuevaContraseña')?.value == this.formulario.get('repetir')?.value){
      this.servicio.RecuperarContraseña(persona).subscribe(datos=>{
        console.log(datos);
      });
    }

    this.ruta.navigate(['/iniciarsesion']);

    alert("cambio de contraseña contraseña correcto");
    
  }
  
}
