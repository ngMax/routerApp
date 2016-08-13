import { provideRouter, RouterConfig } from '@angular/router';
import { USER_ROUTES } from './user/user.routes';
import { HomeComponent } from './home-component.component';
import { UserComponent } from './user/user.component';
const APP_ROUTES: RouterConfig=[
    
    {path:'user/:id', component:UserComponent},
    {path:'user/:id', component:UserComponent, children: USER_ROUTES},
    {path:'**', redirectTo:'/user/1', pathMatch:'full'},
    {path:'', component: HomeComponent}
]; 
export const APP_ROUTES_PROVIDER=[
    provideRouter(APP_ROUTES)
];