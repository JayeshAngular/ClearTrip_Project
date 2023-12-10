import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
selectedAction:string="login";
loginbuttonName:string = "Login/SignUp";

getdata(data:any) {
  this.selectedAction = data;
  console.log(this.selectedAction)
}
getloggeduserData(loggeduser:any) {
  this.loginbuttonName = loggeduser;
}


}
