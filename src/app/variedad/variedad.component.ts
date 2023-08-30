import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVariedadComponent } from './add-variedad/add-variedad.component';
import { EditVariedadComponent } from './edit-variedad/edit-variedad.component';

@Component({
  selector: 'app-variedad',
  standalone: true,
  imports: [CommonModule, AddVariedadComponent, EditVariedadComponent],
  templateUrl: './variedad.component.html',
  styleUrls: ['./variedad.component.css']
})
export class VariedadComponent {

}
