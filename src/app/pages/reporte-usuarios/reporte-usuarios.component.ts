import { Component, OnInit } from '@angular/core';
import{ServicioService} from '../../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-usuarios',
  templateUrl: './reporte-usuarios.component.html',
  styleUrls: ['./reporte-usuarios.component.scss']
})
export class ReporteUsuariosComponent implements OnInit {

  lista:any = [];  
  loginAdmin = localStorage.getItem("loginAdmin");
  constructor(private servicio:ServicioService ,private ruta:Router) { }

  ngOnInit(): void {
    
    this.servicio.reporteUsuarios().subscribe(datos=>{
      for(let i = 0 ; i < datos.length ; i++){
        this.lista.push(datos[i]);
        console.log(datos[i]);
      }
    });
  }

  volver(){
    this.ruta.navigate(['/reportes']);
  }


}
