import { Login_Mocks } from './login-mock';
import { Observable, of } from 'rxjs';
import { AppUserAuth } from './app-user-auth';
import { Injectable } from '@angular/core';
import { AppUser } from './app-user';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor() { }
  login(entity:AppUser): Observable<AppUserAuth>
  {
    this.resetSecurityObject();
    Object.assign(this.securityObject, Login_Mocks.find(x=>entity.userName==x.userName));
    if(this.securityObject.userName!=null)
    {
      localStorage.setItem("bearerToken",this.securityObject.bearerToken);
    }
    return of<AppUserAuth>(this.securityObject);
  }
  logout():void
  {
    this.resetSecurityObject();
  }
  resetSecurityObject():void
  {
    this.securityObject.userName="";
    this.securityObject.bearerToken="";
    this.securityObject.canAccessCatalog=false;
    this.securityObject.canAddVideogame=false;
    this.securityObject.canEditVideogame=false;
    this.securityObject.isAuthenticated=false;
    localStorage.removeItem("bearerToken");
  }
}
