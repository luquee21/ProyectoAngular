import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private autenticacionService: AutenticacionService) { } 
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autenticacionService.isAuthenticated();

  }
  }
