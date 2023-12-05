import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-filters',
  templateUrl: './hotel-filters.component.html',
  styleUrls: ['./hotel-filters.component.css']
})
export class HotelFiltersComponent {
  filterObj: any;
  @Output()
  emitFilerAction:EventEmitter<any> = new EventEmitter

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

  emitData(filterCriteria:any) {
    this.emitFilerAction.emit(filterCriteria)
  }
}
