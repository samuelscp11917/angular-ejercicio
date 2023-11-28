import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HttpClientModule, ReactiveFormsModule,FormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {

  loginForm:any;

  constructor(private loginService:LoginService, private router:Router){
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      if(!this.loginForm.valid){
        return;
      }

      this.loginService.login(username, password).subscribe({
        next: (user) => {
          console.log(user)
        },
        error: (error) => {
          console.log(error)
        },
      });

      this.router.navigate (['/home'])
  }
}
