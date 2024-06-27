import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../shared/services/resource.service';
import { User } from '../shared/interfaces/user';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule,UpperCasePipe, NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  user: User;
  constructor(private resourceService: ResourceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscribeRouteParams();
  }

  subscribeRouteParams() {
    this.route.params.subscribe(params => {
      this.getUserByUsername(params['username']);
    });
  }

  getUserByUsername(username: string) {
    if (!username) {
      return;
    }
    this.resourceService.getUser(username).subscribe((response: User) => {
      this.user = response;
    });
  }
}
