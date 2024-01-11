import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (game of games; track game.id) {
        <li>{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
 games = [
  {
    id: 1,
    name: 'juego 1'
  },
  {
    id: 2,
    name: 'juego 2'
  },
  {
    id: 3,
    name: 'juego 3'
  },
  {
    id: 4,
    name: 'juego 4'
  },
 ]
}
