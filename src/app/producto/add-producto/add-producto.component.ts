import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceProductoService } from 'src/app/services/service-producto.service';
import { ServiceVariedadService } from 'src/app/services/service-variedad.service';
import { ServiceGradoService } from 'src/app/services/service-grado.service';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs/internal/Subscriber';
@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [ServiceVariedadService, ServiceGradoService],
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {

  public variedades$: any;
  public grados$: any;

  FormData!: FormGroup;
  isloading!: boolean;
  myImage!: Observable<any>;
  base64!: any;

  constructor(
    private builder: FormBuilder,
    private producto: ServiceProductoService,
    private toastr: ToastrService,
    private variedad: ServiceVariedadService,
    private grado: ServiceGradoService,

  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      'id': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'especie': new FormControl('', Validators.required),
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
      this.toastr.success('Producto Añadido');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }

  capturarFile = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.convertToBase64(file);

  }

  convertToBase64(file : File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file,subscriber)
    })

    observable.subscribe((d)=> {
      console.log(d)
      this.myImage = d
      this.base64 = d
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete
    }

    filereader.onerror = () =>{
      subscriber.error()
      subscriber.complete()
    }
  }

}
