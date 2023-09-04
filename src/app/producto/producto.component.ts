import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { Router, RouterModule } from '@angular/router';
import { ServiceProductoService } from '../services/service-producto.service';
import { ToastrService } from 'ngx-toastr';
import dxDataGrid from 'devextreme/ui/data_grid';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule,RouterModule, AddProductoComponent, EditProductoComponent, DxDataGridModule],
  providers: [ServiceProductoService],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  public productos$: any;
  dataSource: Array<any> = [];
  DxDataGridColumnDef: any;


  constructor(private producto: ServiceProductoService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(any: string) {
    this.getAllProductos();
    this.fetchData();
  }

  fetchData() {
    // Realiza una petición al link para obtener los datos
    fetch("http://localhost:3000/productosDB")
      .then((response) => response.json())
      .then((data) => {
        // Asigna los datos a la fuente de datos de la datagrid
        this.dataSource = data;
      });
  }

  columnDefs: Array<any> = [
    { dataField: 'id', title: 'ID', sortable: true, filterable: true },
    { dataField: 'name', title: 'Nombre', sortable: true, filterable: true },
  ];

  busqueda(busco : any){

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
    this.router.navigate([`/edit-producto/${id}`]);
  }


}
