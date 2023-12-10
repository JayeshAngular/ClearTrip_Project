import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Unsubscribable, interval } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnDestroy{
 @Output()
 emitSingInData:EventEmitter<string> = new EventEmitter();

 singUpForm!:FormGroup;
 displayOtpField:boolean = false;
 displayVerifyButton:boolean = false;
 otpGenerated!:number; 
 otpEntered!:number; 
displaygetotpbutton: boolean = true;
verifyIcon:boolean = false;
otpCounter!:number;
obs:Subscription = new Subscription ();
 constructor ( private sf:FormBuilder, private httpService:HttpService) {}

 ngOnDestroy () { 
  this.obs.unsubscribe;
 }

 ngOnInit() {
  this.inializeSigninForm();
 }
 inializeSigninForm() {
  this.singUpForm = this.sf.group({
      'userName':['',[Validators.required]],
      'userEmail':['',[Validators.required]],
      'mobileNumber':['',[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      'otpVerified':[true],
      'password':['',[Validators.required]]
  })
 } 

 getOtp() {
  this.displayOtpField = true;
  this.displayVerifyButton= true;
  this.otpGenerated = Math.floor(1000+Math.random() * 9000);
  console.log(this.otpGenerated);
  this.obs = interval(1000).subscribe((el:any)=> {
    this.otpCounter = 30 - el;
    if(this.otpCounter == 0)
    {
      this.obs.unsubscribe (); 
    }
  })
 }
 VerifyOtp () {
  if(this.otpEntered && this.otpGenerated == this.otpEntered)
  {
    this.displayOtpField = false;
    this.displayVerifyButton = false;
    this.displaygetotpbutton = false;
    this.verifyIcon = true;
    // this.singUpForm.get('changeOtp')?.setValue(true);
    this.obs.unsubscribe;
  }
  else 
  {
    alert("Please ENter Valid OTP")
  }
 }

 changeOtp(otp:any) {
   if(otp) 
   {
    this.otpEntered = otp.target.value;
    console.log(this.otpEntered)
   }
 }
 
  navigateToSingIn() {
    this.emitSingInData.emit('Login')
  }

  singup() {
    const data = this.singUpForm.value;
    this.httpService.postDataToServer('users',data).subscribe((resp:any)=> {
      console.log("data saved succefully");
      alert("User Registered Succesfully");
  },
  error => {

  })
  }
}
