import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PagPrincipalComponent } from './pages/pag-principal/pag-principal.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { DetallesDeProductoComponent } from './pages/detalles-de-producto/detalles-de-producto.component';
import { BuscarPipe } from './pipes/buscar.pipe';
import { PolerasComponent } from './pages/poleras/poleras.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { ZapatosComponent } from './pages/zapatos/zapatos.component';
import { PoleronesComponent } from './pages/polerones/polerones.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './pages/footer/footer.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { CookieModule } from 'ngx-cookie';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ReporteProductoComponent } from './pages/reporte-producto/reporte-producto.component';
import { ReporteUsuariosComponent } from './pages/reporte-usuarios/reporte-usuarios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { JeansComponent } from './pages/jeans/jeans.component';
import { ShortsComponent } from './pages/shorts/shorts.component';
import { CamisasComponent } from './pages/camisas/camisas.component';
import { TerminarcompraComponent } from './pages/terminarcompra/terminarcompra.component';


@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent,
    MenuComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    CarritoComprasComponent,
    DetallesDeProductoComponent,
    BuscarPipe,
    PolerasComponent,
    PantalonesComponent,
    ZapatosComponent,
    PoleronesComponent,
    FooterComponent,
    RecuperarComponent,
    InicioAdminComponent,
    ReportesComponent,
    ReporteProductoComponent,
    ReporteUsuariosComponent,
    PerfilComponent,
    JeansComponent,
    ShortsComponent,
    CamisasComponent,
    TerminarcompraComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxCaptchaModule,
    CookieModule . forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
