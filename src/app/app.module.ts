import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {HelloComponent} from './hello.component';
import {AreaComponent} from './area.component'; // éviter de mettre l'extension
// Importation de notre composant

@NgModule({ // = décorateur, directive

  // Chargement par défaut de tous les composants suivants
  declarations: [
    AppComponent,
    HelloComponent, // déclaration du component
    AreaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] ///!\ rien à voir avec la librairie Bootstrap
})
export class AppModule { } // Sur cette classe, on va pouvoir lui appliquer des décorateurs
