import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavModule, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgbNavModule, NgbNav, NgbNavLink, NgbNavItem, NgbNavOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  active = 1;
}
