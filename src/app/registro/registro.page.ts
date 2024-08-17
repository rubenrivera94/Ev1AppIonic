import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  constructor() { }
  // Método onRegister que se ejecuta cuando el formulario se envía
  onRegister() {
    // Aquí  agregamos la lógica para manejar el registro del usuario
    console.log('Registro exitoso!');
  }
}
