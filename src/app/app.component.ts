import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from "./tarjeta/tarjeta.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TarjetaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mundo Angular';
  //ponerle el public y definir el tipo de variable
  public contador: number = 10;
  //crear un contador
  Incrementar(): void{
    this.contador ++;
  }
  Decrementar(): void{
    if(this.contador>10){
      this.contador --;
    }
  }
  Reset(): void{
    this.contador =10;
  }
}
