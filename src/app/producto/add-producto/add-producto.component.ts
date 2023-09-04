import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceProductoService } from 'src/app/services/service-producto.service';
import { ServiceVariedadService } from 'src/app/services/service-variedad.service';
import { ServiceGradoService } from 'src/app/services/service-grado.service';
@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ServiceVariedadService, ServiceGradoService],
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {

  public variedades$: any;
  public grados$: any;

  FormData!: FormGroup;
  isloading!: boolean;

  constructor(
    private builder: FormBuilder,
    private producto: ServiceProductoService,
    private toastr: ToastrService,
    private variedad: ServiceVariedadService,
    private grado: ServiceGradoService,
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
    this.getAllVariedades();
    this.getAllGrados();

  }

  getAllVariedades() {
    this.variedad.getVariedades().subscribe((res)=> {
      this.variedades$ = res
    });
  }

  getAllGrados() {
    this.grado.getGrados().subscribe((res)=> {
      this.grados$ = res
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
