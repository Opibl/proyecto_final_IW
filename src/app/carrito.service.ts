import { Injectable } from '@angular/core';
import { ServicioService } from './servicio.service';
import { Productos } from './productos';
 
@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  constructor(private servicio:ServicioService) { }

  lista:Array<any> = [];
  repetidos:Array<Productos> = [];
  items:Array<Productos> = [];
  //cant:any;

  adicionarCarrito(lista:Array<Productos>){
    //localStorage.setItem("carrito",JSON.stringify(this.items));
    this.items = lista;
    console.log("el de aca el sercio:",this.items);
    
  }

  guardar():Array<Productos>{
    return this.items;
  }
  
  limpiarCarrito():any{
    this.items = [];
    return this.items; 
  }
  
  listarCarrito():Array<Productos>{
    console.log("esta es la lista:",this.items);
    return this.items;
  }

  eliminarItem(item:Productos){
    let resta = 0;

    for(let i = 0 ; i < this.items.length ; i++){
      if(item == this.items[i]){
        this.items.splice(i,1);
      }
    }
    return this.items;
  }
  /*
  cantidadProductos(cantidad:any){
    this.cant = cantidad;
  }

  recibircantidadProd():any{
    console.log("la cantidad es ",this.cant);
    return this.cant;
  }
  */

}


