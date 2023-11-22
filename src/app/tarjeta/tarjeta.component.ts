import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() title: String = "hola soy titulo";
  @Input() img: String = "hola soy img";
  @Input() price: number = 0;
  @Input() priceDiscount: number = 0;
  @Input() black: String = "Normal";
  @Input() imgf: String = "https://s3.amazonaws.com/fms-live/2f377258-9f67-11e9-a85b-0a5864600933.png";
  @Input() style_img: String = "w-25";
}
