import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../Service/producto.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit{

  producto: Producto[]=[];

  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
    this.productoService.getProducto().subscribe({
      next: (data)=>{this.producto= data}, error :(e)=>console.log("Error", e), complete :()=> console.log(this.producto)
    })
  }
}
