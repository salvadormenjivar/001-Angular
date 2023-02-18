import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: 'alumno.component.html',
})
export class AlumnoComponent {
  nombre: string = 'Juan Perez';
  edad: number = 25;

  mostrarInformacion(): string {
    return this.nombre + ' - ' + this.edad;
  }

  get obtenerCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre():void{
    this.nombre = "Jorge González";
  }

  cambiarEdad(){
    this.edad = 99;
  }
}
