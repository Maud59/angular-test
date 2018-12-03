import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selecteur
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // styles css appliqué
})
export class AppComponent { // L'export permettra l'import sur un aute fichier
  title = 'Aston application';
}
