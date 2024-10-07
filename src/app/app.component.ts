import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityComponent } from './shared/componente-accesibilidad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccessibilityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'accesibilidad';
}
