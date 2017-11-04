import { Component } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title = 'Beca Angular Everis';
  colores = ['Rojo', 'Verde', 'Amarillo'];
  mostrarListaColores = true;
  


  funcionAgregar(color){
    console.log(color);
    this.colores.push(color.value);
    color.value="";
    return false;  
  }

  funcion_Mostrar(){
    this.mostrarListaColores = !this.mostrarListaColores;
  }

 
}




