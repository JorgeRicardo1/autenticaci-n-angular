import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '@services/token.service';
import { Observable } from 'rxjs';


export const AuthGuard : CanActivateFn = () => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);

  if(!token){
    router.navigate(['/login']);
    return false;
  }
  return true;

};