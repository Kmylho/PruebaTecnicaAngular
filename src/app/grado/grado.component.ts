import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGradoComponent } from './add-grado/add-grado.component';
import { EditGradoComponent } from './edit-grado/edit-grado.component';
import { Router, RouterModule } from '@angular/router';
import { ServiceGradoService } from '../services/service-grado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grado',
  standalone: true,
  imports: [CommonModule, RouterModule, AddGradoComponent, EditGradoComponent],
  providers: [ServiceGradoService],
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent {
  public grados$: any;

  constructor(private grado: ServiceGradoService, private toastr: ToastrService, private router: Router) {}

  ngOnInit () {
    this.getAllGrados();
  }

  getAllGrados() {
    this.grado.getGrados().subscribe((res)=> {
      this.grados$ = res
    });
  }

  onDeleteGrado(id: any) {
    this.grado.deleteGrado(id).subscribe((res)=> {
      this.toastr.success('Eliminado Correctamente')
      setTimeout(()=> {
        location.reload();
      }, 2000);
    });
  }

  onUpdateGrado(id: any) {
    this.router.navigate([`/update/${id}`]);
  }


}
