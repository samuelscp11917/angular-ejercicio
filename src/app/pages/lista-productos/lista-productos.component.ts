import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from "../../tarjeta/tarjeta.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, TarjetaComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos = [
    {
      title: "LENOVO 1 14ADA05 AMD ATHLON SILVER 3050E 4GB DDR4 128GB SSD 14 HD WIN 10",
      img: "https://i.linio.com/p/a057fe13dcd2b50649c2ed28e9648bf0-catalog.webp",
      price: 835000,
      priceDiscount: 775000,
      black: false,
      porcentaje: -35,
      imgf: "https://s3.amazonaws.com/fms-live/2f377258-9f67-11e9-a85b-0a5864600933.png",
    },
    {
      title: "HP 240 G9 - INTEL CELERON N4500 - 8GB DDR4 - 256GB SSD - PANTALLA 14 HD",
      img: "https://i.linio.com/p/e4d78bf0e7b4702906d6ae0c769fa10a-catalog.webp",
      price: 858000,
      priceDiscount: 799000,
      black: true,
      porcentaje: -64,
      imgf: "https://s3.amazonaws.com/fms-live/2f377258-9f67-11e9-a85b-0a5864600933.png",
    },
    {
      title: "Portatil DELL Inspiron 3520 i5-1135G7 (15.6) Intel® Core i5 8 GB 256 GB SSD",
      img: "https://i.linio.com/p/73b7d54aa2923bb797af2bf59dbf34c8-catalog.webp",
      price: 1599900,
      priceDiscount: 1499900,
      black: false,
      porcentaje: -29,
      imgf: "https://s3.amazonaws.com/fms-live/2f377258-9f67-11e9-a85b-0a5864600933.png",
    },
    {
      title: "Monitor Samsung IPS de 24 Full HD Freesync 75Hz HDMI F24T35 - Negro",
      img: "https://i.linio.com/p/bb419874f493e424e6d5b8eab196463a-catalog.webp",
      price: 499900,
      priceDiscount: 469900,
      black: true,
      porcentaje: -33,
      imgf: "https://s3.amazonaws.com/fms-live/2f377258-9f67-11e9-a85b-0a5864600933.png",
    },
    {
      title: "Portatil HP 245 G9 Amd Ryzen 3 3250U 8gb 256ssd 14 Windows de Prueba",
      img: "https://i.linio.com/p/7963825869df936e145758d43e25d5fd-catalog.webp",
      price: 1079900,
      priceDiscount: 1009900,
      black: true,
      porcentaje: -44,
      imgf: "https://s3.amazonaws.com/fms-live/2f377258-9f67-11e9-a85b-0a5864600933.png",
    },
    {
      title: "Monitor Aoc 21.5 Full Hd Vga Hdmi 22b2hn Color Negro",
      img: "https://i.linio.com/p/1f051712f3569e7840872fc83122741c-catalog.webp",
      price: 388888,
      priceDiscount: 3738888,
      black: true,
      porcentaje: -13,
      imgf: "https://s3.amazonaws.com/fms-live/2f377258-9f67-11e9-a85b-0a5864600933.png",
    }
  ]
}