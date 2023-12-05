import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

    searchHotel() {
      console.log("roomsoption", this.selectRooms); 
      console.log("city", this.City); 
      console.log("checkInDate", this.checkInDate); 
      console.log("checkOutDate", this.checkOutDate); 
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
