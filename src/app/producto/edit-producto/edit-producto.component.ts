import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceProductoService } from 'src/app/services/service-producto.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceVariedadService } from 'src/app/services/service-variedad.service';
import { ServiceGradoService } from 'src/app/services/service-grado.service';

@Component({
  selector: 'app-edit-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ServiceVariedadService, ServiceGradoService],
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent {

  public variedades$: any;
  public grados$: any;

  FormData!: FormGroup;
  isloading!: boolean;
  id!: any;
  nombre$!: any;
  especie$!: any;
  variedad$!: any;
  grado$!: any;
  foto$!: any;
  producto$!: any;

  constructor(private builder: FormBuilder, private producto: ServiceProductoService, private route: ActivatedRoute, private toastr: ToastrService,private variedad: ServiceVariedadService,
    private grado: ServiceGradoService,) {}

  ngOnInit () {
    this.route.paramMap.subscribe((params)=> {
      this.id = params.get('id');
      this.producto.getProducto(this.id).subscribe((res)=> {
        this.producto$ = res;
        this.FormData.patchValue(this.updateFormValues());
      });
    });

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

  onSubmit(formData: any) {
    this.producto.editProducto(this.id, formData).subscribe(res => {
      this.toastr.success('Actualizado correctamente');
      setTimeout(() => {
        location.href = '/producto'
      }, 2000);
    });
  }

  updateFormValues () {
    return{
      id: this.producto$.id,
      nombre: this.producto$.nombre,
      especie: this.producto$.especie,
      variedad: this.producto$.variedad,
      grado: this.producto$.grado,
      foto: this.producto$.foto,
    }
  }

}

