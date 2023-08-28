import { Component, Input, OnInit } from '@angular/core';
import { Variedad } from 'src/app/models/variedad.model';

@Component({
  selector: 'app-variedad-item',
  templateUrl: './variedad-item.component.html',
  styleUrls: ['./variedad-item.component.css']
})
export class VariedadItemComponent {

  @Input() variedad: Variedad | undefined;

  ngOnInit(): void {
    console.log(this.variedad)
  }
}
