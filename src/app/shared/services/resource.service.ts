import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { ResourceResponse, UserResponse } from '../interfaces/user-response';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  addUsers(users: User[]) {
    this.usersSubject.next(users);
  }

  clearUsers() {
    this.usersSubject.next([]);
  }

  constructor(private httpClient: HttpClient) { }

  getUsers(value: string) {
    return this.httpClient.get<ResourceResponse>(`https://api.github.com/search/users?q=${value}&per_page=20`).pipe(
      map(((response: ResourceResponse) => {
        return this.parceUsersResponse(response.items);
      })
    ))
  }

  getUser(value: string) {
    return this.httpClient.get<UserResponse>(`https://api.github.com/users/${value}`).pipe(
      map(((response: UserResponse) => {
          return this.parseUser(response);
        })
      ))
  }

  public parceUsersResponse(users: UserResponse[]): User[] {
    return users.map((user) => {
      return this.parseUser(user);
    });
  }

  private parseUser(user: UserResponse): User {
    return {
      avatarUrl: user.avatar_url,
      id: user.id,
      login: user.login,
      url: user.html_url,
      type: user.type
    }
  }


}
