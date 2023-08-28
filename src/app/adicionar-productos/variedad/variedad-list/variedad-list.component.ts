import { Component, OnInit } from '@angular/core';
import { VariedadService } from 'src/app/Service/variedad.service';
import { Variedad } from 'src/app/models/variedad.model';

@Component({
  selector: 'app-variedad-list',
  templateUrl: './variedad-list.component.html',
  styleUrls: ['./variedad-list.component.css']
})
export class VariedadListComponent {

  variedad: Variedad[]=[];

  constructor(private variedadService: VariedadService) {}

  ngOnInit(): void {
    this.variedadService.getVariedad().subscribe({
      next:(data)=>{this.variedad= data},  error :(e)=>console.log("Error", e), complete :()=> console.log(this.variedad)
    })
  }
}
