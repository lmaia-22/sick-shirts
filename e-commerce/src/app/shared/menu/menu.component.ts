import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbNavModule, NgbCollapseModule  } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ NgbCollapseModule, NgbNavModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  active = 'top';
  isCollapsed = true;
}
