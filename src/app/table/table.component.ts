import { Component, OnDestroy } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../shared/ui/search/search.component';
import { CommonModule, NgIf } from '@angular/common';
import { ResourceService } from '../shared/services/resource.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchComponent, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnDestroy {
  users: User[] = [];

  constructor(private resourceService: ResourceService) {
    this.resourceService.users$.subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.resourceService.clearUsers();
  }
}
