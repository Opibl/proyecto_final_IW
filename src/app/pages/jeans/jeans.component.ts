import { Component, OnInit } from '@angular/core';
import{ListaProductos, Productos} from '../../productos';
import {CarritoService} from '../../carrito.service';
import {ServicioService} from '../../servicio.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.scss']
})
export class JeansComponent implements OnInit {

  lista:Array<Productos> = [];
  lista2:Array<Productos> = [];
  nologin = true;
  listacook:Array<Productos> = [];
  guardar:any = [];
  pasar:any = []
  constructor(private carrito:CarritoService,private servicio:ServicioService,config:NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.servicio.Consultar().subscribe(datos=>{
      for(let i = 0 ; i < datos.length ; i++){
        if(datos[i].categoria === 'jeans'){
          this.lista.push(datos[i]);
        }
        
        //console.log(datos[i]);
      }
    });
    this.lista2 = this.lista;

    this.guardar = localStorage.getItem('carrito');
    if(this.guardar != null){
      this.listacook = JSON.parse(this.guardar);
    }
    //this.listacook = this.carrito.guardar();
    //this.listacook = this.carrito.listarCarrito();
    //localStorage.setItem('carrito',JSON.stringify(this.listacook));
    //console.log("la lista",this.lista);
  }

  adicionarCarrito(item:Productos)
  {
    //this.listacook = this.carrito.guardar();
    this.listacook.push(item);
    this.carrito.adicionarCarrito(this.listacook);
    localStorage.setItem("carrito",JSON.stringify(this.listacook));
    console.log("producto adicionado:",item); 
    alert('producto agregado al carrito');
    //this.cont++;
  }
  
  Comprar(){
    
  }

}
