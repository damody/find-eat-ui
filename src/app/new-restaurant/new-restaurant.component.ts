import { Component, OnInit } from '@angular/core';
import { FindEatService } from '../find-eat.service';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  name = "";
  phone = "";
  email = "";
  lng: number;
  lat: number;
  open_time = "";
  close_time = "";
  delivery = "";
  constructor(private findeatService: FindEatService) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  ngOnInit() {
  }
  OnClick() {
    this.findeatService.newRestaurant("", this.lng, this.lat, this.name, this.phone, 
      this.email, this.open_time, this.close_time, this.delivery)
      .subscribe(data => {
        console.log(data);
      });
  }
}
