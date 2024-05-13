import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`
  :host nb-layout-header button:last-child {
    margin-left: auto;
  }
`],
})
export class AppComponent {
  title = 'e-commerce';
}
