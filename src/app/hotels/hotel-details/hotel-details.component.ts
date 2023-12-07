import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
  hotelDetails: any;
  hotelId: string = "";
  imgUrl: string = "";
  constructor(private activateRoute: ActivatedRoute, private httpService: HttpService) {
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
} 
