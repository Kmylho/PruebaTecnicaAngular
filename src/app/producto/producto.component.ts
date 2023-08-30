import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { Router, RouterModule } from '@angular/router';
import { ServiceProductoService } from '../services/service-producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule,RouterModule, AddProductoComponent, EditProductoComponent],
  providers: [ServiceProductoService],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  public productos$: any;

  constructor(private producto: ServiceProductoService, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos() {
    this.producto.getProductos().subscribe((res)=> {
      this.productos$ = res
    });
  }

  onDeleteProducto(id: any) {
    this.producto.deleteProducto(id).subscribe((res)=> {
      this.toastr.success('Eliminado Correctamente')
      setTimeout(()=> {
        location.reload();
      }, 2000);
    });
  }

  onUpdateProducto(id: any) {
    this.router.navigate([`/update/${id}`]);
  }


}
