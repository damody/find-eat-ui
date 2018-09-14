import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FindEatService } from '../find-eat.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  autodata = ['12345', '23456', '34567'];
  constructor(private findeatService: FindEatService) { }

  ngOnInit() {
  }
  keyinput(event) {
    console.log(event.target.value);
    if (event.target.value.length > 0) {
      this.findeatService.getFoods(event.target.value)
      .subscribe(data => {
        console.log(data);
        this.autodata = data;
      });
    } else {
      this.autodata = [];
    }
  }
}
