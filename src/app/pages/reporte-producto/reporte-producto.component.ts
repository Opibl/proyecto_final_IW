import { Component, OnInit } from '@angular/core';
import{ServicioService} from '../../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-producto',
  templateUrl: './reporte-producto.component.html',
  styleUrls: ['./reporte-producto.component.scss']
})
export class ReporteProductoComponent implements OnInit {

  lista:any = [];  
  Total = 0;
  loginAdmin = localStorage.getItem("loginAdmin");

  constructor(private servicio:ServicioService ,private ruta:Router) { }

  ngOnInit(): void {

      this.servicio.reporteProductos().subscribe(datos=>{
        for(let i = 0 ; i < datos.length ; i++){
          this.lista.push(datos[i]);
          console.log(datos[i]);
          this.Total = this.Total + datos[i].precio;
        }
      });
  }

  volver(){
    this.ruta.navigate(['/reportes']);
  }

}
