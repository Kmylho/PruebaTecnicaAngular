import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceProductoService } from 'src/app/services/service-producto.service';
@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {

  FormData!: FormGroup;
  isloading!: boolean;

  constructor(
    private builder: FormBuilder,
    private producto: ServiceProductoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      id: new FormControl(''),
      nombre: new FormControl(''),
      especie: new FormControl(''),
      variedad: new FormControl(''),
      grado: new FormControl(''),
      foto: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      id: new FormControl(''),
      grado: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.producto.postProducto(formData).subscribe((res) => {
      this.toastr.success('Grado Añadido');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }



}
