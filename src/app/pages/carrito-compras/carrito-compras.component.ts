
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import {CarritoService} from '../../carrito.service';
import { Productos } from '../../productos';
import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { CookieService } from 'ngx-cookie';
import { ServicioService } from '../../servicio.service';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import {ProductosPedidos} from '../../productos-pedidos';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  lista:Array<Productos> = [];
  total:any = 0; 
  formulario:FormGroup;
  cant:number = 0;
  logeado:any = '';
  nologin = true;
  datos:any;
  guardar:any = [];
  objetos:any;
  currentRate:number = 0;
  
  
 


  constructor(private fb:FormBuilder,private ruta:Router,private activatedRoute: ActivatedRoute,private carrito:CarritoService,private cookie:CookieService,private servicio:ServicioService,config:NgbRatingConfig){ 
    this.formulario = this.fb.group({
      nombre:[''],
      texto:[''],
      puntuacion:[''],
    });

    config.max = 5;
    config.readonly = false;
    //config.resettable = false;
  }

  ngOnInit(): void {
    //window.location.reload();
    this.guardar = localStorage.getItem('carrito');
    this.lista = JSON.parse(this.guardar);
    
    

    console.log("lo que deberia llegar",this.lista);
    for(let i = 0; i < this.lista.length ;i++){
      this.total = this.total + this.lista[i].precio; 
     
    }
    this.logeado = localStorage.getItem("login");
    
    if(this.logeado == "ok"){
      this.nologin = false;
    }
   
  }

   


  eliminar(item:any){
  
    for(let i = 0 ; i < this.lista.length ; i++){
      if(item == this.lista[i]){
        this.total = this.total - this.lista[i].precio;
        this.lista.splice(i,1);
        localStorage.setItem("carrito",JSON.stringify(this.lista));
      }
    }


    
  }


  
  adicionarProducto(item:any){
    this.lista.push(item)
    this.carrito.adicionarCarrito(this.lista);
    this.total = this.total + item.precio;
    localStorage.setItem("carrito",JSON.stringify(this.lista));
    
  }
  


  terminarCompra(){

   


    /*let nuevaLista:Array<ProductosPedidos> = [];
    for(let i = 0 ; i < this.lista.length;i++){
      let productito:ProductosPedidos={
        nombre:this.lista[i].nombre,
        categoria:this.lista[i].categoria,
        precio:this.lista[i].precio
      };
      nuevaLista.push(productito);
    }
    
    console.log(nuevaLista);
    this.servicio.terminarPedido(nuevaLista).subscribe(datos=>{
      console.log("los datos del terminar",datos);
    });
    */
    localStorage.setItem("terminarcompra","si");
    this.ruta.navigate(['/terminarcompra']);
    console.log("la lista del terminar",this.lista);
    this.total = 0;
    
    /*this.carrito.limpiarCarrito();
    this.cookie.removeAll();
    localStorage.removeItem('carrito');
    */
    alert('gracias por su compra :)');
  }

  vaciar(){
    this.lista = this.carrito.limpiarCarrito();
    this.total = 0;
    localStorage.setItem("carrito",JSON.stringify(this.lista));
  }


  Crear(item:any){
    let aca:any = item.nombre;
    let estapuntuacion:any = this.currentRate;
    this.formulario.get('nombre')?.setValue(aca);
    this.formulario.get('puntuacion')?.setValue(estapuntuacion);

    console.log( this.formulario.get('nombre')?.value);
    console.log(item.nombre);
    console.log(this.formulario.get('texto')?.value);

    let comentario:any={
      nombre:this.formulario.get('nombre')?.value,
      texto:this.formulario.get('texto')?.value,
      puntuacion:this.formulario.get('puntuacion')?.value
    };

    console.log(comentario);

    this.servicio.comentarios(comentario).subscribe(datos=>{
      console.log(datos);
    })

   

    alert('comentario recibido');
  }

}


