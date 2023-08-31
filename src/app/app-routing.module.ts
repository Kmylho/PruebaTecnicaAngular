import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddGradoComponent } from './grado/add-grado/add-grado.component';
import { EditGradoComponent } from './grado/edit-grado/edit-grado.component';
import { GradoComponent } from './grado/grado.component';
import { VariedadComponent } from './variedad/variedad.component';
import { ProductoComponent } from './producto/producto.component';
import { AddVariedadComponent } from './variedad/add-variedad/add-variedad.component';
import { EditVariedadComponent } from './variedad/edit-variedad/edit-variedad.component';
import { AddProductoComponent } from './producto/add-producto/add-producto.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { AdicionarProductoComponent } from './adicionar-producto/adicionar-producto.component';

const routes: Routes = [
  { path: '',component: AppComponent, pathMatch: 'prefix'},
  { path: 'add-grado',component: AddGradoComponent },
  { path: 'edit-grado/:id',component: EditGradoComponent },
  { path: 'add-variedad',component: AddVariedadComponent },
  { path: 'edit-variedad/:id',component: EditVariedadComponent },
  { path: 'producto',component: ProductoComponent },
  { path: 'adicionar-producto',component: AdicionarProductoComponent },
  { path: 'add-producto',component: AddProductoComponent },
  { path: 'edit-producto/:id',component: EditProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GradoComponent, VariedadComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
