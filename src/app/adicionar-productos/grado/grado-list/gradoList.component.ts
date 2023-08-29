import { Component, OnInit } from '@angular/core';
import { GradoService } from 'src/app/Service/grado.service';
import { Grado } from 'src/app/models/grado.model';

@Component({
  selector: 'app-grado-list',
  templateUrl: './gradoList.component.html',
  styleUrls: ['./gradoList.component.css']
})
export class GradoListComponent implements OnInit{

  grado: Grado[]=[];

  constructor(private gradoService: GradoService) {}

  ngOnInit(): void {
    this.gradoService.getGrados().subscribe({
      next:(data)=>{this.grado= data},  error : (e)=>console.log("Error", e), complete :()=> console.log(this.grado)
    })
  }

  // onGradoEdit(grado: Grado):void {
  //   this.gradoService.updateGrado(grado).subscribe();
  // }

  onGradoDelete(id : string):void {
    this.gradoService.deleteGrado(id).subscribe();  //llamada al servicio para eliminar el registro de la base
  }
}
