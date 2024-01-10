import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimerComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @Output()
  title = 'angular-prueba';

  mostrarDiv: boolean = true;

  array: Array<string> = ["hola", "chau", "adios"]

  mostrarAlgo() {
    this.mostrarDiv = !this.mostrarDiv
  }
}
