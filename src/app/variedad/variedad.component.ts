import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVariedadComponent } from './add-variedad/add-variedad.component';
import { EditVariedadComponent } from './edit-variedad/edit-variedad.component';
import { RouterModule, Router } from '@angular/router';
import { ServiceVariedadService } from '../services/service-variedad.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-variedad',
  standalone: true,
  imports: [CommonModule,RouterModule, AddVariedadComponent, EditVariedadComponent],
  templateUrl: './variedad.component.html',
  styleUrls: ['./variedad.component.css']
})
export class VariedadComponent {

  public variedades$: any;

  constructor(private variedad: ServiceVariedadService, private toastr: ToastrService, private router: Router) {}

  ngOnInit () {
    this.getAllVariedades();
  }

  getAllVariedades() {
    this.variedad.getVariedades().subscribe((res)=> {
      this.variedades$ = res
    });
  }

  onDeleteVariedad(id: any) {
    this.variedad.deleteVariedad(id).subscribe((res)=> {
      this.toastr.success('Eliminado Correctamente')
      setTimeout(()=> {
        location.reload();
      }, 2000);
    });
  }

  onUpdateVariedad(id: any) {
    this.router.navigate([`/update/${id}`]);
  }

}
