import { Component } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { count } from 'rxjs';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-hotel-review',
  templateUrl: './hotel-review.component.html',
  styleUrls: ['./hotel-review.component.css']
})
export class HotelReviewComponent {
  bookingObj:Booking= new Booking;
  roomInfo:Room = new Room;
  hotelSearchDetails:HotelSearch = new HotelSearch;

  constructor(private hotelService:HotelService, private auth:AuthService) {

  }

  ngOnInit() {
    this.createHotelBookingObj();

   
  }


  createHotelBookingObj() {
    
    const selectedHotelInfo = this.hotelService.getSelectedHotelInfo();
    const hotelSearchInfo = this.hotelService.getHotelSearchInfo();

     
    // userinfo
    this.bookingObj.userInfo= this.auth.getUserDetails();

    // hotelInfo
    this.bookingObj.hotelId = selectedHotelInfo.id;
    this.bookingObj.hotelName = selectedHotelInfo.name;
    this.bookingObj.hotelAddress = selectedHotelInfo.locationPersuasion[0] + " " + selectedHotelInfo.locationPersuasion[1];
    this.bookingObj.hotelRating = selectedHotelInfo.reviewSummary.cumulativeRating;
    this.bookingObj.price = selectedHotelInfo.priceDetail.price;
    this.bookingObj.discountedPrice = selectedHotelInfo.priceDetail.discountedPrice;
    this.bookingObj.totalTaxes = selectedHotelInfo.priceDetail.totalTax;
    this.bookingObj.totalPrice = selectedHotelInfo.priceDetail.priceWithTax;
    this.bookingObj.totalDiscountPrice = selectedHotelInfo.priceDetail.discountedPriceWithTax
    this.bookingObj.hotelImage = selectedHotelInfo.media[0].url;
    // roomInfo
    this.roomInfo.amenities = selectedHotelInfo.roomList[0].amenities;
    this.roomInfo.roomName = selectedHotelInfo.roomList[0].roomName;
    this.roomInfo.beds = selectedHotelInfo.roomList[0].beds[0].count;
    this.roomInfo.roomCode = selectedHotelInfo.roomList[0].roomCode;
    this.roomInfo.maxGuest = selectedHotelInfo.roomList[0].maxGuest;
    this.roomInfo.maxAdult = selectedHotelInfo.roomList[0].maxAdult;
    this.roomInfo.maxChild = selectedHotelInfo.roomList[0].maxChild;

    // hotel-search
    
    this.hotelSearchDetails.checkInDate = hotelSearchInfo.checkInDate;
    this.hotelSearchDetails.checkOutDate = hotelSearchInfo.checkOutDate;
    this.hotelSearchDetails.city = hotelSearchInfo.city;
    this.hotelSearchDetails.roomType = hotelSearchInfo.selectedRoom;
    console.log(this.bookingObj.hotelName)
}
}

export class Booking {
  guestDetails:Guest[]=[];
  hotelId:string="";
  hotelName:string="";
  hotelAddress:string="";
  hotelRating:string="";
  hotelImage:string = "";
  noOfRooms:number | undefined;
  price:number | undefined;
  totalPrice:number | undefined;
  discountedPrice:number | undefined;
  totalDiscountPrice:number | undefined;
  totalTaxes:number | undefined;
  userInfo:any;
}

export class Guest {
  fullName:string = "";
  emailId:string="";
  mobileNo: number| null = null;
}

export class Room {
  roomName:string = "";
  roomCode:string = "";
  maxGuest:number | undefined;
  maxAdult:number | undefined;
  maxChild:number | undefined;
  amenities:any;
  beds:any;
}

export class HotelSearch {
  checkInDate:any;
  checkOutDate:any;
  city:String="";
  roomType:String="";
}
