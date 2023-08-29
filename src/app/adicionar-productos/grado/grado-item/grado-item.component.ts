import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
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

  addNewGrado(form:NgForm) {
    const data = {
      id : form.value.idGradoNuevo,
      grado: form.value.gradoGradoNuevo
    }
    // this.grado.addGrado(data).subscribe(Response => {
    //   console.log("response")
    // })
    console.log(form.value);
    console.log(data);
  }

}
