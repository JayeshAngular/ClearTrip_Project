import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotelSearchinfo:any;
  private selectedHotelInfo:any;
  constructor() { }
  addHotelSearchDetails(checkInDetails:any) {
  this.hotelSearchinfo = checkInDetails;     
  }

  getHotelSearchInfo() {
    return this.hotelSearchinfo;
  }

  addSelectedHotel(selectedHotel:any) {
    this.selectedHotelInfo = selectedHotel;
  }

  getSelectedHotelInfo() {
    return this.selectedHotelInfo;
  }
}
