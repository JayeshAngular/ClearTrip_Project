import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
modalHeader:string = "Login";

@Output()
emitsingup:EventEmitter<any> = new EventEmitter();

@Output()
emitlogButtonName:EventEmitter<any> = new EventEmitter();

 loginForm!:FormGroup;

 constructor(private Lf:FormBuilder, private http:HttpService, private authSVC:AuthService){}

 ngOnInit() {
  this.initialiseLoginForm();
 }

 initialiseLoginForm() {
  this.loginForm = this.Lf.group({
    'userMailId':['',[Validators.required]],
    'userPassword':['',[Validators.required]]
  }) 
 }

 login() {
  const httpParams = new HttpParams()
                .set('userEmail',this.loginForm.get('userMailId')?.value)
                .set('password',this.loginForm.get('userPassword')?.value)

  this.http.getDataFromServer('users',httpParams).subscribe((resp:any)=> {
    if(resp && resp.length > 0)
    {
      this.authSVC.addUserDetails(resp[0]);
      alert("login succesfull")
       
      this.emitlogButtonName.emit(resp[0].userName)
    }
    else 
    {
      alert("Please Enter Valid Credential")
    }
  })
 }

navigateToSingup() {
  this.emitsingup.emit("SingUp")
}
}
