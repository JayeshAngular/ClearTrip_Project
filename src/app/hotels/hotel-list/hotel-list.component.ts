import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  searchHotelObj: any = {
    city: "",
    checkInDate: null,
    checkOutDate: null,
    selectedRoom: "",
  }

  selectedsorttype:string="";
  hotelList: any;
  finalHotelList: any;
  hotelListCopy:any;

  constructor(private activateRouter: ActivatedRoute, private httpSVC: HttpService, private router:Router) {
    this.searchHotelObj.city = this.activateRouter.snapshot.queryParamMap.get('city');
    this.searchHotelObj.checkInDate = this.activateRouter.snapshot.queryParamMap.get('checkin');
    this.searchHotelObj.checkOutDate = this.activateRouter.snapshot.queryParamMap.get('checkout');
    this.searchHotelObj.selectedRoom = this.activateRouter.snapshot.queryParamMap.get('rooms');
    console.log(this.searchHotelObj)
  }

  ngOnInit() {
    var endPoint = "search-hotels";
    this.httpSVC.getDataFromServer(endPoint).subscribe({
      next: (ele: any) => {
        if (ele && ele.response && ele.response.personalizedSections) {
          this.hotelList = ele.response.personalizedSections[0].hotels;
        }
        this.finalHotelList = this.hotelList.filter((el: any) => el.locationDetail.name == this.searchHotelObj.city)
        console.log(this.finalHotelList)
        this.hotelListCopy = [...this.finalHotelList]
      }
    })
  }

  sortHotels(type: string) {
    this.selectedsorttype = type;
    if (type == "rating") {
      this.finalHotelList.sort((a: any, b: any) => b.reviewSummary.cumulativeRating - a.reviewSummary.cumulativeRating)
    }
    else if(type == "priceHighest") 
    {
      this.finalHotelList.sort((a: any, b: any) => b.priceDetail.discountedPrice - a.priceDetail.discountedPrice)
    }
    else if (type == "priceLowest")
    {
      this.finalHotelList.sort((a: any, b: any) => a.priceDetail.discountedPrice - b.priceDetail.discountedPrice)
    }
  }

  getFilterCriteria(filterCriteria:any) {
    this.filterHotelOnCriteria(filterCriteria);
    console.log(filterCriteria)
  }
  filterHotelOnCriteria(criteria:any) {
    if(criteria.isSelected) 
    {
    if(criteria.type == 'RATING')
    {
      this.finalHotelList = this.hotelListCopy.filter((ele:any)=> ele.reviewSummary.cumulativeRating > criteria.filterValue)
      console.log(this.finalHotelList)
    } 
    else if (criteria.type == 'HOTEL_PRICE_BUCKET')
    {
      this.finalHotelList = this.hotelListCopy.filter((ele:any)=> ele.priceDetail.discountedPrice > criteria.filterRange.min && ele.priceDetail.discountedPrice <= criteria.filterRange.max)
    } 
  }
  else 
  {
    this.finalHotelList = this.hotelListCopy;
  }
}

  // filterHotelMulti (criteria:any) {
  //   var ratingArr: any[] = [];
  //   var priceArr: any[] = [];
  //   criteria.forEach((el:any) => {
  //     if(el.type == 'RATING')
  //     {
  //       ratingArr  = this.hotelListCopy.filter((ele:any)=> ele.reviewSummary.cumulativeRating > criteria.filterValue)
  //     }
  //     if (criteria.type == 'HOTEL_PRICE_BUCKET')
  //     {
  //       priceArr = this.hotelListCopy.filter((ele:any)=> ele.priceDetail.discountedPrice > criteria.filterRange.min && ele.priceDetail.discountedPrice <= criteria.filterRange.max)
  //     }
  //   });
  //   if(criteria.length > 0) 
  //   {
  //     this.hotelList = this.hotelList.concat(ratingArr,priceArr)
  //   }
  //   else 
  //   {
  //     this.hotelList = this.hotelListCopy;
  //   }
  // }

  selectHotels(hotelId:string) {
    this.router.navigate(['/hotels/hotel-details'],{queryParams:{id:hotelId}})
  }
}
