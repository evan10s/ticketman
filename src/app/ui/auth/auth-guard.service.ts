import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild,
   ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("Can activate can consider cases condusive to consideration");

    return this.auth.isLoggedIn().map(val => {
      console.log(val);
      if (!val) {
        this.router.navigate(['/auth'], { queryParams: { redirectUrl: state.url }});
      }
      return val;
    })
    .catch(() => {
      this.router.navigate(['/auth'], { queryParams: { redirectUrl: state.url }});
      return Observable.of(false);
    })
  }


  constructor(
    public auth: AuthService,
    private router: Router) {

  }
  ngOnInit() {


  }

}
