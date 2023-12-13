import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let username:any = sessionStorage.getItem('userInfo');
 if ( username != null ) 
 {
  return true;
 }
 else 
 {
  alert("Please Login For Confirm Booking")
  return false;
 }
};
