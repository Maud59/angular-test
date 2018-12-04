import {Component,Input} from '@angular/core'; // Input pour lui donner une valeur variable en entrée

@Component({
      selector : 'app-area',
      templateUrl:'./area.component.html',
      styleUrls :['./area.component.css']
     
})

export class AreaComponent{
      texte= '';
      @Input() tailleMax =140;// On a ouvert une porte d'entrée sur notre composant.(une sorte de setter)
      @Input() nomButton='Partager';
}
