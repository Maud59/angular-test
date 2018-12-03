// importation de notre component
import {Component} from '@angular/core';

@Component({
      // Selecteur qui sera appelé dans note html
      selector : '.app-hello',// pour class //'[app-hello]' pour attribut,//'app-hello' pour selecteur, 
      template : `<h2> Hello {{name}} </h2>`, // Le template peut passer par une url
      styles :[`
      h2{
            color : purple;
      }`]
})
export class HelloComponent{
      name = 'Maud';
}
/* notre composant va se déclarer dans notre fichier app.module*/