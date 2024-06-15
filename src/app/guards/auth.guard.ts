import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '@services/token.service';
import { Observable } from 'rxjs';


export const AuthGuard : CanActivateFn = () => {
  const isValidToken = inject(TokenService).isValidRefreshToken();
  const router = inject(Router);

  if(!isValidToken){
    router.navigate(['/login']);
    return false;
  }
  return true;

};
