// app-routing.module.ts (rename to just app.routes.ts, por exemplo)
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PedidosComponent } from './pedidos/pedidos/pedidos.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'pedidos', component: PedidosComponent },
];
