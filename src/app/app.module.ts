import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorModule } from './acumulador/acumulador.module';
import { AcumuladorComponent } from './acumulador/acumulador/acumulador.component';
import { AlumnoModule } from './alumnos/alumnos.module';


import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlumnoModule,
    AcumuladorModule,
    ClientesModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
