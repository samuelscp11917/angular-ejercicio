import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-vista-detalle',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './vista-detalle.component.html',
  styleUrl: './vista-detalle.component.css'
})
export class VistaDetalleComponent {

}
