import { Component } from '@angular/core';

interface ICliente{
  nombre: string;
  edad:number;
}


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  listaClientes : ICliente[]=[
    {
      nombre:"Juan Perez",
      edad:50
    },
    {
      nombre:"Ana Rodriguez",
      edad:30
    },
    {
      nombre:"Marcos Romero",
      edad:45
    },
  ]
  
  nuevoCliente : ICliente = {
    nombre:"",
    edad: 0
  }

  agregar():void{
    console.log(this.nuevoCliente);
  }
}
