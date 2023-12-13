import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HotelService } from './services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  City!:string;
  selectedDate!:Date[];
  selectedRooms:string = "";
  checkInDate:any;
  checkOutDate:any;
  roomsOptArr:string[] = ["1 Room,1 Adults","1 Room,2 Adults","2 Room,4 Adults"];

  hotelSearchDetails:hotelSearchData = new hotelSearchData();

  constructor(private hotelSvc:HotelService) {}


    searchHotel() {
      console.log("roomsoption", this.selectRooms); 
      console.log("city", this.City); 
      console.log("checkInDate", this.checkInDate); 
      console.log("checkOutDate", this.checkOutDate); 
      this.hotelSearchDetails.checkInDate = this.checkInDate;
      this.hotelSearchDetails.checkOutDate = this.checkOutDate;
      this.hotelSearchDetails.city = this.City;
      this.hotelSearchDetails.roomType = this.selectedRooms;
      this.hotelSvc.addHotelSearchDetails(this.hotelSearchDetails);
    }
  dateChange(){
    if(this.selectedDate && this.selectedDate.length == 2) {
      this.checkInDate = this.selectedDate[0];
      this.checkOutDate = this.selectedDate[1];
    }
  }

  selectRooms(roomoption:any) {
    this.selectRooms= roomoption;
  }
}

export class hotelSearchData {
  checkInDate:string = "";
  checkOutDate:string = "";
  city:string = "";
  roomType:string = "";
}
