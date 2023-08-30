import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, AddProductoComponent, EditProductoComponent],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

}
