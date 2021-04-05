import { AppUserAuth } from './../security/app-user-auth';
import { SecurityServiceService } from './../security/security-service.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  form: FormGroup;
  securityObject:AppUserAuth =new AppUserAuth();
  constructor( public fb: FormBuilder,
    public securityService: SecurityServiceService) { 

    this.form = this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
      
    });
  }
 
ngOnInit(): void {}
login()
{
this.securityService.login(this.form.value).subscribe((res)=>
  {
    if(res.userName!=null && res.bearerToken!=null)
    {
      this.securityObject=res;
      if(this.securityObject.userName=="" && this.securityObject.bearerToken=="")
      {
        this.securityObject.userName="invaliduser";
      }
    }
    else
    {
      this.securityObject.isAuthenticated=false;
      this.securityObject.userName="userinvalid"
    }
  });
}
get userName() { return this.form.get('userName'); }
  get password() { return this.form.get('password'); }
}
