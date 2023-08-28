import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { AdicionarProductosComponent } from './adicionar-productos/adicionar-productos.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GradoItemComponent } from './adicionar-productos/grado/grado-item/grado-item.component';
import { GradoListComponent } from './adicionar-productos/grado/grado-list/gradoList.component';
import { VariedadItemComponent } from './adicionar-productos/variedad/variedad-item/variedad-item.component';
import { VariedadListComponent } from './adicionar-productos/variedad/variedad-list/variedad-list.component';
import { ProductoItemComponent } from './adicionar-productos/producto/producto-item/producto-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarProductosComponent,
    AdicionarProductosComponent,
    HeaderComponent,
    HomeComponent,
    GradoItemComponent,
    GradoListComponent,
    VariedadItemComponent,
    VariedadListComponent,
    ProductoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
