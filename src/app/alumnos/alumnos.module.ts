import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlumnoComponent } from "./alumno/alumno.component";
import { ListaComponent } from "./lista/lista.component";

@NgModule({
    //declarations: Agregamos los componentes que va a contener este módulo
    declarations:[
        AlumnoComponent,
        ListaComponent
    ]
    ,
    // exports: Agregamos los componentes que se van a exponer del módulo para ser utilizados
    exports:[
        ListaComponent,
        AlumnoComponent
    ],
    //Agregamos los módulos que se van a importar
    imports:[
        //CommonModule me permite utilizar las directivas como NgFor, NgIf
        CommonModule
    ]
})
export class AlumnoModule{

}