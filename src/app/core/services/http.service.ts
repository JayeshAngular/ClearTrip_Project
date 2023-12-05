import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl:string = "http://localhost:3000/";

  httpsHeaders:HttpHeaders = new HttpHeaders ({
    "content-type":"application/json"
  })

  constructor(private https:HttpClient) { }

  // getDataFromServer(endPoint:string, obj:any) {
  //   let httpParams = new HttpParams()
  //   .set("city ",obj.city)
  //   .set("checkInDate",obj.checkIn)
  //   .set("checkOutDate",obj.checkOut)
  //   const url = this.baseurl + endPoint;
  //   return this.https.get(url,{headers:this.httpsHeaders,params:httpParams});
  // }
  getDataFromServer(endPoint:string) {
    const url = this.baseurl + endPoint;
    return this.https.get(url,{headers:this.httpsHeaders})
  }
}
