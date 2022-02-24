import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class AuthGuardChild implements CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const isAuth = localStorage.getItem('auth');
        if (!isAuth) {
            return false
        }
        return true;
    }
}