import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClienteComponent
  ],
  exports:[
    ClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClientesModule { }
