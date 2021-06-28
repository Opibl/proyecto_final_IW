import { Component, OnInit } from '@angular/core';
import{ServicioService} from '../../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  lista:any = [];  

  click = 'no';
  loginAdmin = localStorage.getItem("loginAdmin");

  constructor(private servicio:ServicioService,private ruta:Router) { }

  ngOnInit(): void {
  }
  
  reporteUsuarios(){
    this.ruta.navigate(['/reporteUsuarios']);
  }

  reporteProductos(){
    this.ruta.navigate(['/reporteProductos']);
  }

  
  
}
