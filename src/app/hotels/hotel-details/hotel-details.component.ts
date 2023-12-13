import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  hotelDetails: any;
  hotelId: string = "";
  imgUrl: string = "";
  j:any;
  constructor(private activateRoute: ActivatedRoute, private httpService: HttpService,private router: Router, private hotelSVC:HotelService) {
    let ID = this.activateRoute.snapshot.queryParamMap.get('id');
    if (ID != null) {
      this.hotelId = ID;
    }
  }
  ngOnInit() {
    this.getHotelDetailsById();
  }

  getHotelDetailsById() {
    const endPoint: string = "hotel-details";
    var httpParamas = new HttpParams()
      .set("id", this.hotelId)
    this.httpService.getDataFromServer(endPoint, httpParamas).subscribe((resp: any) => {
      if (resp && resp.length > 0) {
        this.hotelDetails = resp[0];
        console.log( "jayeshhotellist",this.hotelDetails)
      }
    })
  }
  selectRoom(roomIndex:any,packageIndex:any) { 
    this.router.navigate(['hotels/hotel-review']);
    let selectedHotelDetails = this.hotelDetails;
    selectedHotelDetails.roomList = [this.hotelDetails.roomList[roomIndex]];
     selectedHotelDetails.roomList[0].ratePlans = this.hotelDetails.roomList[roomIndex].ratePlans[packageIndex];
     this.hotelSVC.addSelectedHotel(selectedHotelDetails);
  }
} 
