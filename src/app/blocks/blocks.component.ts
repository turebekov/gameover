import { Component, OnDestroy } from '@angular/core';
import { ResourceService } from '../shared/services/resource.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../shared/interfaces/user';
import { SearchComponent } from '../shared/ui/search/search.component';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SearchComponent],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss'
})
export class BlocksComponent implements OnDestroy {

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
