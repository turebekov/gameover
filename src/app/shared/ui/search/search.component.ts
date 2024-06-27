import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ResourceService } from '../../services/resource.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchValue: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private resourceService: ResourceService) {
  }

  searchForm() {
    this.resourceService.getUsers(this.searchValue)
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => {
        this.resourceService.addUsers(users);
      }, error => {
        console.warn(error);
        alert('error')
      });
  }
}
