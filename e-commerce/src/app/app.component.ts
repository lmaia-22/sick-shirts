import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbSidebarService  } from '@nebular/theme';
import { MenuComponent } from './shared/menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    MenuComponent
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
  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}
