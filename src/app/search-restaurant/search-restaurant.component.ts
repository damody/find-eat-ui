import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FindEatService } from '../find-eat.service';

export interface State {
  name: string;
}

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.css']
})
export class SearchRestaurantComponent implements OnInit {
  checked = false;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  lat = 0;
  lng = 0;
  states: State[] = [
    /*{name: "豪享來""},
    {name: "伍富牛肉麵"},
    {name: "李媽媽麵館"},
    {name: "我家牛排館"},
    {name: "大熊牛排"},
    {name: "小漢堡"},
    {name: "牛肉福"},
    {name: "丁家樓"},*/
  ];
  constructor(private findeatService: FindEatService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => this.states.slice())
      );
  }
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  keyinput(event) {
    console.log(event.target.value);
    if (event.target.value.length > 0) {
      this.findeatService.getRestaurants(event.target.value, this.checked)
      .subscribe(data => {
        console.log(data);
        this.states = [];
        data.forEach(element => {
          this.states.push({name: element});
        });
        this.stateCtrl.updateValueAndValidity();
      });
    } else {
      this.states = [];
      this.stateCtrl.updateValueAndValidity();
    }
  }
}
