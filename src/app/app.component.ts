import { AppUserAuth } from './security/app-user-auth';
import { SecurityServiceService } from './security/security-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'video-game-catalog';
  securityObject: AppUserAuth= new AppUserAuth();
  constructor(public securityService: SecurityServiceService)
  {
    this.securityObject= this.securityService.securityObject;
  }
}
