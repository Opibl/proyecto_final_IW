import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalComponent} from './pages/pag-principal/pag-principal.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { DetallesDeProductoComponent } from './pages/detalles-de-producto/detalles-de-producto.component';
import { PolerasComponent } from './pages/poleras/poleras.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { ZapatosComponent } from './pages/zapatos/zapatos.component';
import { PoleronesComponent } from './pages/polerones/polerones.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ReporteProductoComponent } from './pages/reporte-producto/reporte-producto.component';
import { ReporteUsuariosComponent } from './pages/reporte-usuarios/reporte-usuarios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { JeansComponent } from './pages/jeans/jeans.component';
import { ShortsComponent } from './pages/shorts/shorts.component';
import { CamisasComponent } from './pages/camisas/camisas.component';
import { TerminarcompraComponent } from './pages/terminarcompra/terminarcompra.component';


const routes: Routes = [
  {path:'',component:PagPrincipalComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path:'iniciarsesion',component:IniciarSesionComponent},
  {path:'carritoCompras',component: CarritoComprasComponent},
  {path:'producto/:id',component:  DetallesDeProductoComponent},
  {path:'poleras',component:  PolerasComponent},
  {path:'pantalones',component:  PantalonesComponent},
  {path:'zapatos',component:  ZapatosComponent},
  {path:'polerones',component: PoleronesComponent },
  {path:'recuperarContrasena',component: RecuperarComponent },
  {path:'inicioAdmin',component: InicioAdminComponent },
  {path:'reportes',component: ReportesComponent },
  {path:'reporteProductos',component:ReporteProductoComponent  },
  {path:'reporteUsuarios',component:ReporteUsuariosComponent  },
  {path:'perfil',component:PerfilComponent  },
  {path:'jeans',component:JeansComponent  },
  {path:'shorts',component:ShortsComponent  },
  {path:'camisas',component:CamisasComponent  },
  {path:'terminarcompra',component:TerminarcompraComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
