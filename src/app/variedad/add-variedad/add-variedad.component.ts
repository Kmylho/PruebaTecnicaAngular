import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceVariedadService } from 'src/app/services/service-variedad.service';

@Component({
  selector: 'app-add-variedad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-variedad.component.html',
  styleUrls: ['./add-variedad.component.css']
})
export class AddVariedadComponent {

  FormData!: FormGroup;
  isloading!: boolean;

  constructor(
    private builder: FormBuilder,
    private variedad: ServiceVariedadService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      id: new FormControl(''),
      variedad: new FormControl(''),
      color: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      id: new FormControl(''),
      variedad: new FormControl(''),
      color: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.variedad.postVariedad(formData).subscribe((res) => {
      this.toastr.success('Grado Añadido');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }



}
