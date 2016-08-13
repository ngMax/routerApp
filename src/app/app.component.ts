import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Subscription } from 'Rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES],
  styles:[`
    .active{
      color:red;
    }
  `]
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  param:string;
  title = 'app works!';
  constructor(private router:Router){
    router.routerState.queryParams.subscribe(
      (queryParam: any)=> this.param=queryParam['analytics']
    );
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
