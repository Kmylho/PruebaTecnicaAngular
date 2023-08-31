import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceGradoService } from 'src/app/services/service-grado.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-grado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-grado.component.html',
  styleUrls: ['./edit-grado.component.css']
})
export class EditGradoComponent {

  FormData!: FormGroup;
  isloading!: boolean;
  id!: any;
  grado$!: any;

  constructor(private builder: FormBuilder, private grado: ServiceGradoService, private route: ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit () {
    this.route.paramMap.subscribe((params)=> {
      this.id = params.get('id');
      this.grado.getGrado(this.id).subscribe((res)=> {
        this.grado$ = res;
        this.FormData.patchValue(this.updateFormValues());
      });
    });

    this.FormData = this.builder.group({
      id: new FormControl(''),
      grado: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.grado.editGrado(this.id, formData).subscribe(res => {
      this.toastr.success('Actualizado correctamente');
      setTimeout(() => {
        location.href = '/adicionar-producto'
      }, 2000);
    });
  }

  updateFormValues () {
    return{
      id: this.grado$.id,
      grado: this.grado$.grado,
    }
  }

}
