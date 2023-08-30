import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceGradoService } from 'src/app/services/service-grado.service';

@Component({
  selector: 'app-add-grado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-grado.component.html',
  styleUrls: ['./add-grado.component.css']
})
export class AddGradoComponent {

  FormData!: FormGroup;
  isloading!: boolean;

  constructor(
    private builder: FormBuilder,
    private grado: ServiceGradoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      id: new FormControl(''),
      grado: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      id: new FormControl(''),
      grado: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.grado.postGrado(formData).subscribe((res) => {
      this.toastr.success('Grado Añadido');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }


}
