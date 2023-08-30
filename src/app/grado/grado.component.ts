import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGradoComponent } from './add-grado/add-grado.component';
import { EditGradoComponent } from './edit-grado/edit-grado.component';

@Component({
  selector: 'app-grado',
  standalone: true,
  imports: [CommonModule, AddGradoComponent, EditGradoComponent],
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent {

}
