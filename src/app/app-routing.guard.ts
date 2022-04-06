import {Injectable} from '@angular/core';
import {
  CanLoad,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Router,
  Route,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanLoadGuard ' + new Date());
    return true;
  }

}

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivateGuard ' + new Date());
    if (null == window.localStorage.getItem('token')) {
      if ('/login' != state.url && '/register' != state.url) {
        return this.router.navigate(['login']);
      } else {
        return true;
      }
    } else {
      if ('/login' == state.url || '/register' == state.url) {
        return this.router.navigate(['main']);
      } else {
        return true;
      }
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivateChildGuard ' + new Date());
    return true;
  }

}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<string> {

  canDeactivate(
    component: null,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanDeactivateGuard ' + new Date());
    return true;
  }

}
