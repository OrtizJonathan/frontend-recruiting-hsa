import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../models/user-details.model';
import { environment } from 'src/environments/environment';
import { UserRepo } from '../models/user-repos.model';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  
  public details = new BehaviorSubject<UserDetails>(null);
  public detailsObservable = this.details.asObservable();
  public repositories = new BehaviorSubject<UserRepo[]>(null);
  public repositoriesObservable = this.repositories.asObservable();

  constructor(private http: HttpClient) { }

  getUser(user: string): Observable<any> {
    return this.http.get<UserDetails>(environment.POINT + user);
  }

  setUser(userDetails: UserDetails) {
    this.details.next(userDetails);
  }

  getRepositories(user: string): Observable<any> {
  return this.http.get<UserRepo>(environment.POINT + user + '/repos');
  }

  setRepositories(res: UserRepo[]) {
    this.repositories.next(res);
  }
  
}
