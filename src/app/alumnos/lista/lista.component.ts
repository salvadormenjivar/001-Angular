import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  alumnos: string[] = ['Emilia', 'César', 'Bryan', 'Blanca', 'Hugo'];
  alumnosBorrados: string[] = [];

  borrarAlumno() {
    if (this.alumnos.length !== 0) {
      let alumnoBorrado = this.alumnos.pop();
      //console.log(alumnoBorrado);
      this.alumnosBorrados.push(alumnoBorrado || '');
    }
  }
}
