import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradoComponent } from "./grado/grado.component";
import { VariedadComponent } from './variedad/variedad.component';
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { AdicionarProductoComponent } from './adicionar-producto/adicionar-producto.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AdicionarProductoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        GradoComponent,
        VariedadComponent,
        ProductoComponent
    ]
})
export class AppModule { }
