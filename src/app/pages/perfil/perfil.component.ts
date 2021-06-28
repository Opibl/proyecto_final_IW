import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import{ServicioService} from '../../servicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  lista:any = [];
  email:any;
  emailUser:any;
  verdaderoEmail:string = ''
  constructor(private login:LoginService,private servicio:ServicioService) { }

  ngOnInit(): void {
    //this.lista =  this.login.datos();
    this.email = localStorage.getItem("email");
    this.emailUser = JSON.parse(this.email);
    this.servicio.datosPerfil(this.emailUser).subscribe(datos=>{
      for(let i = 0 ; i < datos.length ; i++){
        if(this.emailUser == datos[i].email){
          this.lista.push(datos[i]);
        }
      }
    })
  
  }

  

}
