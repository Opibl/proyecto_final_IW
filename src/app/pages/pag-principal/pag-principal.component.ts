import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Productos,ListaProductos} from '../../productos';
import{Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ServicioService} from '../../servicio.service';
import {CarritoService} from '../../carrito.service';
import {LoginService} from '../../login.service'
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.scss']
})
export class PagPrincipalComponent implements OnInit {

  //lista = ListaProductos;
  //nologin = true;
  listacook:Array<Productos> = [];
  form:FormGroup;
  palabraFiltro:String = "";
  cont = 1;
  lista:Array<Productos> = [];
  lista2:Array<Productos> = [];
  apretoboton = false;
  nologin:boolean = true;
  datos:any;
  logeado:any = '';
  guardar:any = [];
  pasar:any = [];

  constructor(private ruta:Router ,private fb:FormBuilder,config:NgbRatingConfig,private servicio:ServicioService ,private carrito:CarritoService,private login:LoginService,private cookie:CookieService) { 
    this.form = this.fb.group({
      texto:['']
    });
    config.max = 5;
    config.readonly = true;
  }
  
  
  ngOnInit(): void {
    this.servicio.Consultar().subscribe(datos=>{
      for(let i = 0 ; i < datos.length ; i++){
        this.lista.push(datos[i]);
        //console.log(datos[i]);
      }
    });

    this.lista2 = this.lista;
    this.nologin = this.login.recibirResultadoLogin();
    console.log(this.nologin);
    
    this.logeado = localStorage.getItem("login");
    console.log(this.logeado);
    if(this.logeado == "ok"){
      this.datos = localStorage.getItem("datos");
      console.log("dato del locas storage",this.datos);
      this.nologin = false;
    }
    
  
    this.guardar = localStorage.getItem('carrito');
    if(this.guardar != null){
      this.listacook = JSON.parse(this.guardar);
      localStorage.setItem('carrito',JSON.stringify(this.listacook));
      this.carrito.adicionarCarrito(this.listacook);
    }
    //this.listacook = JSON.parse(this.guardar);
    //localStorage.setItem('carrito',JSON.stringify(this.listacook));
    //this.carrito.adicionarCarrito(this.listacook);
    //console.log("la lista",this.lista);
    
  }
  

  

  adicionarCarrito(item:Productos)
  {
    
    this.listacook.push(item);
    this.carrito.adicionarCarrito(this.listacook);
    localStorage.setItem("carrito",JSON.stringify(this.listacook));
    alert('producto agregado al carrito');
    console.log("producto adicionado:",item); 
    //this.cont++;
  }

  buscarProducto(){
    /*
      nose todavia si cambiarlo
    */
    this.palabraFiltro = this.form.get('texto')?.value;
    
    /*
    if(this.palabraFiltro == 'polerones'){
      this.ruta.navigate(['/polerones']);
    }
    else{
      if(this.palabraFiltro == 'zapatos'|| this.palabraFiltro == 'zapatillas'){
        this.ruta.navigate(['/zapatos']);
      }
      else{
        if(this.palabraFiltro == 'pantalones'){
          this.ruta.navigate(['/pantalones']);
        }
        else{
          if(this.palabraFiltro == 'poleras'){
            this.ruta.navigate(['/poleras']);
          }
        }
      }
  
    }
    */
   if(this.form.get('texto')?.value == ''){
     this.apretoboton = false;
   }
   else{
    this.apretoboton = true;
   }

    console.log(this.palabraFiltro);
  }

}
