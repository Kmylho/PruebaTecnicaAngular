import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdicionarProductosComponent } from './adicionar-productos/adicionar-productos.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'adicionar-productos', component: AdicionarProductosComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
