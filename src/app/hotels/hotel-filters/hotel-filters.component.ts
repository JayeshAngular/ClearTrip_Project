import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-filters',
  templateUrl: './hotel-filters.component.html',
  styleUrls: ['./hotel-filters.component.css']
})
export class HotelFiltersComponent {
  filterObj: any;
  selectedFilterAction:any = [];
  @Output()
  emitFilerAction:EventEmitter<any> = new EventEmitter

  // @Output() 
  // emitMultiAction:EventEmitter<any> = new EventEmitter

  constructor() { }


  ngOnInit() {
    this.filterObj = {
      rating: [
        {
          type: "RATING",
          filterValue: 4,
          filterValueType: "Exellent",
          isRangeFilter: false,
          filterRange: null,
          isSelected: false
        },
        {
          type: "RATING",
          filterValue: 3,
          filterValueType: "Very Good",
          isRangeFilter: false,
          filterRange: null,
          isSelected: false
        },
        {
          type: "RATING",
          filterValue: 2,
          filterValueType: "Good",
          isRangeFilter: false,
          filterRange: null,
          isSelected: false
        }
      ],
      pricePerNight: [
        {
          type: "HOTEL_PRICE_BUCKET",
          filterValue: null,
          isRangeFilter: true,
          filterRange :{
            min: 0,
            max: 2000
          },
          isSelected: false
        },
        {
          type: "HOTEL_PRICE_BUCKET",
          filterValue: null,
          isRangeFilter: true,
          filterRange :{
            min: 2000,
            max: 3000
          },
          isSelected: false
        },
        {
          type: "HOTEL_PRICE_BUCKET",
          filterValue: null,
          isRangeFilter: true,
          filterRange :{
            min: 3000,
            max: 5000
          },
          isSelected: false
        }
      ]
    }
  }

  // emitMultiData(filterCriteria:any) {
  //   this.selectedFilterAction = [];
  //   if(this.filterObj.rating) 
  //   {
  //    var ratingArr =  this.filterObj.rating((el:any)=> el.isSelected);
  //    if(ratingArr && ratingArr.length == 0)
  //    {
  //     this.selectedFilterAction.concat(ratingArr);
  //    }
  //   }
  //   if(this.filterObj.pricePerNight) 
  //   {
  //    var priceArr =  this.filterObj.pricePerNight((el:any)=> el.isSelected);
  //    if(priceArr && priceArr.length == 0)
  //    {
  //     this.selectedFilterAction.concat(priceArr);
  //    }
  //   }
  //   this.selectedFilterAction.push(filterCriteria)
  //   console.log(this.selectedFilterAction)
  //   this.emitMultiAction.emit(this.selectedFilterAction)
  // }
  emitData(filterCriteria:any) {
    this.emitFilerAction.emit(filterCriteria)
  }
}
