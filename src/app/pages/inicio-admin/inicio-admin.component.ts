import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import{ServicioService} from '../../servicio.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import {Admin} from '../../admin';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.scss']
})
export class InicioAdminComponent implements OnInit {

  formulario:FormGroup;
  nombre:AbstractControl;
  contraseña:AbstractControl;
  nologinAdmin = true;
  siteKey:string;
  

  constructor(public fb:FormBuilder,private servicio:ServicioService,private ruta:Router,private cookie:CookieService) {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required]],
      contraseña:['',[Validators.required]],
      recaptcha: ['', Validators.required]
      
    });

    this.nombre = this.formulario.controls["nombre"];
    this.contraseña = this.formulario.controls["contraseña"];
    this.siteKey = '6LczEFsbAAAAALSxVf7D9hyJjhxNqGjCc91hWvfD';

   }

  ngOnInit(): void {
    
  }

  Crear(){
    let logAdmin:string = "";
    this.cookie.put('admin',"admin");
    
    let persona:Admin={
      nombre:this.formulario.get('nombre')?.value,
      contraseña:this.formulario.get('contraseña')?.value,
    };

    this.servicio.guardarDatosAdmin(persona).subscribe(datos=>{
      if(datos.length > 0){
       
        this.nologinAdmin = false;
        logAdmin = "ok";
        alert("has iniciado sesion correctamente");
        localStorage.setItem("loginAdmin",logAdmin);
        window.location.assign("/reportes");
        this.ruta.navigate(['/reportes']);
      }
      else{
        console.log(datos);
        let logAdmin = "no";
        localStorage.setItem("loginAdmin",logAdmin);
        alert("usuario incorrecto");
      }
    
    });
  }

}
