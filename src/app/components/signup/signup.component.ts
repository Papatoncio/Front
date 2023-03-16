import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  empleado = {
    IdEmpleado: 0,
    Nombre: '',
    Edad: 0,
    Rol: [],
    Telefono: [],
    Sueldo: 0,
    Turno: '',
    Correo: '',
    Password: ''
  }

  checkbox = '';

  constructor(private authService: AuthService) { }

  signup() {
    console.log(this.checkbox);
    console.log(this.empleado);
    this.authService.signUp(this.empleado)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err));
  }
}
