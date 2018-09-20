import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FindEatService } from '../find-eat.service';

export interface State {
  name: string;
}

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {
  checked = false;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    /*{name: "牛肉飯"},
    {name: "牛肉炒麵"},
    {name: "小牛排"},
    {name: "牛肉麵"},
    {name: "牛肉炒飯"},
    {name: "三層肉"}*/
  ];

  constructor(private findeatService: FindEatService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => this.states.slice())
      );
  }
  ngOnInit() {
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  keyinput(event) {
    console.log(event.target.value);
    if (event.target.value.length > 0) {
      this.findeatService.getFoods(event.target.value, this.checked)
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
