import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import{ListaProductos, Productos} from '../../productos';
import {CarritoService} from '../../carrito.service';
import {ProductosPedidos} from '../../productos-pedidos';
import { ServicioService } from '../../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminarcompra',
  templateUrl: './terminarcompra.component.html',
  styleUrls: ['./terminarcompra.component.scss']
})
export class TerminarcompraComponent implements OnInit {

  listacook:Array<Productos> = [];
  formulario:FormGroup;
  nombre:AbstractControl;
  direccion:AbstractControl;
  palabraFiltro:String = "";
  cont = 1;
  lista:Array<Productos> = [];
  datos:any;
  guardar:any = [];
  terminarcompra:any;

  constructor(public fb:FormBuilder,private carrito:CarritoService,private servicio:ServicioService,private ruta:Router) {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required]],
      direccion:['',[Validators.required]],
      
      
    });
    this.nombre = this.formulario.controls["nombre"];
    this.direccion = this.formulario.controls["direccion"];
    
  }

  ngOnInit(): void {
    this.guardar = localStorage.getItem('carrito');
    this.lista = JSON.parse(this.guardar);
    console.log(this.lista);
    this.terminarcompra = localStorage.getItem("terminarcompra");
  }

  Crear(){
    let nuevaLista:Array<ProductosPedidos> = [];
    for(let i = 0 ; i < this.lista.length;i++){
      let productito:ProductosPedidos={
        nombre:this.lista[i].nombre,
        nombreusuario:this.formulario.get('nombre')?.value,
        categoria:this.lista[i].categoria,
        precio:this.lista[i].precio,
        direccion:this.formulario.get('direccion')?.value,
      };
      nuevaLista.push(productito);
    }
    
    console.log(nuevaLista);
    this.servicio.terminarPedido(nuevaLista).subscribe(datos=>{
      console.log("los datos del terminar",datos);
    });

    this.carrito.limpiarCarrito();
    
    localStorage.setItem('terminarcompra',"no");
    localStorage.removeItem('carrito');
    this.ruta.navigate(['']);
    alert("gracias por su compra");
  

  }
}
