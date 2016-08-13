import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'Rxjs/rx'
@Component({
    moduleId: module.id,
    selector: 'app-user-component',
    template: `
      <h1>User Component</h1>
      
      <a [routerLink]="['/']" [queryParams]="{analytics:500}">Home</a>
      <hr>
      
      <button (click)="onNavigate()">Go to Home</button>
      <hr>
        <p>The value passed is; {{id}}</p>
      <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})
export class UserComponent implements OnDestroy{
  id: string;
  private subscription: Subscription;
  constructor(private router: Router, activatedRoute: ActivatedRoute){
    //this.id= activatedRoute.snapshot.params['id']
    this.subscription=activatedRoute.params.subscribe(
      (param)=>this.id=param['id']
    );
  }
  onNavigate(){
    this.router.navigate(['/'], {queryParams:{'analytics':2500}});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
