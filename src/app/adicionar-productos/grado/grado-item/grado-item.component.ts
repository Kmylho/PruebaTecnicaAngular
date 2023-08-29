import { Component, Input, OnInit } from '@angular/core';
import { Grado } from 'src/app/models/grado.model';

@Component({
  selector: 'app-grado-item',
  templateUrl: './grado-item.component.html',
  styleUrls: ['./grado-item.component.css']
})
export class GradoItemComponent implements OnInit{

  @Input() grado: Grado | undefined;

  ngOnInit(): void {
    console.log(this.grado)
  }

  // addNewGrado():void {
  //   const data = {
  //     id : "1",
  //     grado: "test"
  //   }
  //   this.gradoService.addGrado(data).subscribe(Response => {
  //     console.log("response")
  //   })
  //   console.log(data);
  // }

}
