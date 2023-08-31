import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceVariedadService } from 'src/app/services/service-variedad.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-variedad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-variedad.component.html',
  styleUrls: ['./edit-variedad.component.css']
})
export class EditVariedadComponent {

  FormData!: FormGroup;
  isloading!: boolean;
  id!: any;
  variedad$!: any;
  color$!: any;

  constructor(private builder: FormBuilder, private variedad: ServiceVariedadService, private route: ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit () {
    this.route.paramMap.subscribe((params)=> {
      this.id = params.get('id');
      this.variedad.getVariedad(this.id).subscribe((res)=> {
        this.variedad$ = res;
        this.FormData.patchValue(this.updateFormValues());
      });
    });

    this.FormData = this.builder.group({
      id: new FormControl(''),
      variedad: new FormControl(''),
      color: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.variedad.editVariedad(this.id, formData).subscribe(res => {
      this.toastr.success('Actualizado correctamente');
      setTimeout(() => {
        location.href = '/adicionar-producto'
      }, 2000);
    });
  }

  updateFormValues () {
    return{
      id: this.variedad$.id,
      variedad: this.variedad$.variedad,
      color: this.variedad$.color,
    }
  }

}
