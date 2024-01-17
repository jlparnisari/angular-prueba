import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 username = 'jlparnisari';
 isLoggedIn = false;

 greet(){
  alert(`Bienvenido ${this.username}`);
 }

}
