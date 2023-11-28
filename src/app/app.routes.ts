import { Routes } from '@angular/router';
import { VistaDetalleComponent } from './pages/vista-detalle/vista-detalle.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
    {path: "vista-detalle", component : VistaDetalleComponent},
    {path: "lista-productos", component: ListaProductosComponent},
    {path: "", component: HomeComponent },
    {path: "inicio-sesion", component: InicioSesionComponent},
    {path: "carrito", component: CarritoComponent},
    {path: "**", component: HomeComponent}
];
