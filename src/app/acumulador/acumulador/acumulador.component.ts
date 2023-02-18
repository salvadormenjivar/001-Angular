import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  template: `
    <h2>Contador</h2>
    <h3>Valor a incrementar o decrementar: {{ valor }}</h3>
    <button (click)="modificarValor(valor)">Incrementar</button>
    <span>{{ numero }}</span>
    <button (click)="modificarValor(-valor)">Decrementar</button>
  `,
})
export class AcumuladorComponent {
  numero: number = 100;
  valor: number = 10;
  modificarValor(valor: number) {
    this.numero += valor;
  }
}
