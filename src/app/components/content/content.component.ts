import { Component, OnInit } from '@angular/core';
import { OperationService } from '../../services/operation.service';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  repos:any;
  userRepositories = [];
  name: string;
  userDetails: UserDetails;
  hasRepositories: boolean;

  constructor(
    private operationService: OperationService,
    private routeActiv: ActivatedRoute,
  ) 
  {
    this.userRepositories = [];
  }
  
  ngOnInit(): void {
    this.name = this.routeActiv.snapshot.params.user;
    this.operationService.getUser(this.name)
      .toPromise().then( res => {
        if (res) {
          this.operationService.setUser(res);
          this.repo(this.name);
        } else {
          //error
        }
      });
  }
  
  repo(user: string) {
    this.operationService.getRepositories(user)
      .toPromise().then( response => {
        if (response) {
          this.operationService.setRepositories(response);
          this.charge();
        }
      });
  }
  
  charge(): void {
    this.operationService.detailsObservable.subscribe( res => {
      this.userDetails = res;
    });
  }
}
