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
}
