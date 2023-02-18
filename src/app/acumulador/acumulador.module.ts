import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AcumuladorComponent } from "./acumulador/acumulador.component";


@NgModule({   
    declarations:[
        AcumuladorComponent
    ],    
    exports:[
        AcumuladorComponent
    ],
})
export class AcumuladorModule{

}