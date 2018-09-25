import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FindEatService } from '../find-eat.service';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  dest_restaurant = "豪享來";
  name = "";
  price = 0;
  constructor(private findeatService: FindEatService) { }

  ngOnInit() {
  }
  OnClick() {
    this.findeatService.newFood(this.name, this.price)
      .subscribe(data => {
        console.log(data);
      });
  }
}
